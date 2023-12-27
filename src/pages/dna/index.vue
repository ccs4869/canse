<template>
  <div id="dna">
    <div class="relative w-screen h-screen">
      <div
        class="dna-particle w-screen h-screen overflow-hidden bg-black"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
import * as THREE from "https://cdn.skypack.dev/three@0.133.1"
import { EffectComposer } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/postprocessing/UnrealBloomPass.js"
import { ShaderPass } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/postprocessing/ShaderPass.js"
import ky from "https://cdn.skypack.dev/kyouka@1.2.5"
import { OrbitControls } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/controls/OrbitControls"
import { EffectComposer } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/postprocessing/EffectComposer"
import Stats from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/libs/stats.module"
import * as dat from "https://cdn.skypack.dev/dat.gui@0.7.7"
import {
  ModifierStack,
  Twist,
  Vector3
} from "https://cdn.skypack.dev/three.modifiers@2.5.7"

const mainVertexShader = `
#define GLSLIFY 1
highp float random(vec2 co)
{
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

float qinticInOut(float t) {
  return t < 0.5
    ? +16.0 * pow(t, 5.0)
    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}

varying vec2 vUv;
varying vec3 vPosition;

varying float vRandColor;
varying float vRandAlpha;

uniform float uSize;
uniform float uProgress;

void main(){
    // rand particle color and alpha
    float randColor=random(uv);
    float randAlpha=random(uv+50.);
    float randAnimeOffset=random(uv);
    
    vec3 newPos=position;
    
    // anime
    // newPos.y+=quinticInOut(clamp(0.,1.,(uProgress-uv.y*.6)/.4));
    
    vec4 modelPosition=modelMatrix*vec4(newPos,1.);
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    
    gl_Position=projectedPosition;
    gl_PointSize=uSize*(1./-viewPosition.z);
    
    vUv=uv;
    vPosition=position;
    vRandColor=randColor;
    vRandAlpha=randAlpha;
}
`

const mainFragmentShader = `
#define GLSLIFY 1
float circle(vec2 st,float r){
    vec2 dist=st-vec2(.5);
    return 1.-smoothstep(r-(r*1.15),r,dot(dist,dist)*4.);
}

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uGradInner;
uniform float uGradMaskTop;
uniform float uGradMaskBottom;

varying vec2 vUv;
varying vec3 vPosition;

varying float vRandColor;
varying float vRandAlpha;

void main(){
    // rand particle color
    vec3 color=uColor1;
    if(vRandColor>0.&&vRandColor<.33){
        color=uColor2;
    }else if(vRandColor>.33&&vRandColor<.66){
        color=uColor3;
    }
    color*=vRandAlpha;
    
    // circle alpha
    float alpha=circle(gl_PointCoord,1.);

    // vertical grad mask
    float gradMask=smoothstep(uGradMaskTop,uGradMaskBottom,vUv.y);
    alpha*=gradMask;
    
    vec4 finalColor=vec4(color,1.)*alpha;
    gl_FragColor=finalColor;
}
`

const caVertexShader = `
varying vec2 vUv;

void main(){
    vec4 modelPosition=modelMatrix*vec4(position,1.);
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    gl_Position=projectedPosition;
    
    vUv=uv;
}
`

const caFragmentShader = `
// Credit: https://github.com/spite/Wagner/blob/master/fragment-shaders/chromatic-aberration-fs.glsl

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform sampler2D tDiffuse;

uniform float uCAMaxDistortion;
uniform float uCASize;

varying vec2 vUv;

vec2 barrelDistortion(vec2 coord,float amt){
    vec2 cc=coord-.5;
    float dist=dot(cc,cc);
    return coord+cc*dist*amt;
}

float sat(float t)
{
    return clamp(t,0.,1.);
}

float linterp(float t){
    return sat(1.-abs(2.*t-1.));
}

float remap(float t,float a,float b){
    return sat((t-a)/(b-a));
}

vec4 spectrum_offset(float t){
    vec4 ret;
    float lo=step(t,.5);
    float hi=1.-lo;
    float w=linterp(remap(t,1./6.,5./6.));
    ret=vec4(lo,1.,hi,1.)*vec4(1.-w,w,1.-w,1.);
    
    return pow(ret,vec4(1./2.2));
}

void main(){
    vec2 uv=vUv;
    
    float max_distort=uCAMaxDistortion;
    float size=uCASize;
    int num_iter=9;
    float reci_num_iter_f=1./float(num_iter);
    
    vec4 sumcol=vec4(0.);
    vec4 sumw=vec4(0.);
    for(int i=0;i<num_iter;++i)
    {
        float t=float(i)*reci_num_iter_f;
        vec4 w=spectrum_offset(t);
        sumw+=w;
        sumcol+=w*texture2D(tDiffuse,barrelDistortion(uv,size*max_distort*t));
    }
    
    vec4 color=sumcol/sumw;
    
    gl_FragColor=color;
}
`

const calcAspect = (el: HTMLElement) => el.clientWidth / el.clientHeight

const getNormalizedMousePos = (e: MouseEvent | Touch) => {
  return {
    x: (e.clientX / window.innerWidth) * 2 - 1,
    y: -(e.clientY / window.innerHeight) * 2 + 1
  }
}

class MouseTracker {
  mousePos: THREE.Vector2
  mouseSpeed: number
  constructor() {
    this.mousePos = new THREE.Vector2(0, 0)
    this.mouseSpeed = 0
  }
  // 追踪鼠标位置
  trackMousePos() {
    window.addEventListener("mousemove", (e) => {
      this.setMousePos(e)
    })
    window.addEventListener(
      "touchstart",
      (e: TouchEvent) => {
        this.setMousePos(e.touches[0])
      },
      { passive: false }
    )
    window.addEventListener("touchmove", (e: TouchEvent) => {
      this.setMousePos(e.touches[0])
    })
  }
  // 设置鼠标位置
  setMousePos(e: MouseEvent | Touch) {
    const { x, y } = getNormalizedMousePos(e)
    this.mousePos.x = x
    this.mousePos.y = y
  }
  // 追踪鼠标速度
  trackMouseSpeed() {
    // https://stackoverflow.com/questions/6417036/track-mouse-speed-with-js
    let lastMouseX = -1
    let lastMouseY = -1
    let mouseSpeed = 0
    window.addEventListener("mousemove", (e) => {
      const mousex = e.pageX
      const mousey = e.pageY
      if (lastMouseX > -1) {
        mouseSpeed = Math.max(
          Math.abs(mousex - lastMouseX),
          Math.abs(mousey - lastMouseY)
        )
        this.mouseSpeed = mouseSpeed / 100
      }
      lastMouseX = mousex
      lastMouseY = mousey
    })
    document.addEventListener("mouseleave", () => {
      this.mouseSpeed = 0
    })
  }
}

class Base {
  debug: boolean
  container: HTMLElement | null
  perspectiveCameraParams: PerspectiveCameraParams
  orthographicCameraParams: OrthographicCameraParams
  cameraPosition: THREE.Vector3
  lookAtPosition: THREE.Vector3
  rendererParams: THREE.WebGLRendererParameters
  mouseTracker: MouseTracker
  scene: THREE.Scene
  stats: Stats
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls
  shaderMaterial: THREE.ShaderMaterial
  composer: EffectComposer
  constructor(sel: string, debug = false) {
    this.debug = debug
    this.container = document.querySelector(sel)
    this.perspectiveCameraParams = {
      fov: 75,
      near: 0.1,
      far: 100
    }
    this.orthographicCameraParams = {
      zoom: 2,
      near: -100,
      far: 1000
    }
    this.cameraPosition = new THREE.Vector3(0, 3, 10)
    this.lookAtPosition = new THREE.Vector3(0, 0, 0)
    this.rendererParams = {
      alpha: true,
      antialias: true
    }
    this.mouseTracker = new MouseTracker()
  }
  // 初始化
  init() {
    this.createScene()
    this.createPerspectiveCamera()
    this.createRenderer()
    this.createMesh({})
    this.createLight()
    this.createOrbitControls()
    this.addListeners()
    this.setLoop()
  }
  // 创建场景
  createScene() {
    const scene = new THREE.Scene()
    if (this.debug) {
      scene.add(new THREE.AxesHelper())
      const stats = Stats()
      this.container.appendChild(stats.dom)
      this.stats = stats
    }
    this.scene = scene
  }
  // 创建透视相机
  createPerspectiveCamera() {
    const { perspectiveCameraParams, cameraPosition, lookAtPosition } = this
    const { fov, near, far } = perspectiveCameraParams
    const aspect = calcAspect(this.container)
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.copy(cameraPosition)
    camera.lookAt(lookAtPosition)
    this.camera = camera
  }
  // 创建正交相机
  createOrthographicCamera() {
    const { orthographicCameraParams, cameraPosition, lookAtPosition } = this
    const { left, right, top, bottom, near, far } = orthographicCameraParams
    const camera = new THREE.OrthographicCamera(
      left,
      right,
      top,
      bottom,
      near,
      far
    )
    camera.position.copy(cameraPosition)
    camera.lookAt(lookAtPosition)
    this.camera = camera
  }
  // 更新正交相机参数
  updateOrthographicCameraParams() {
    const { container } = this
    const { zoom, near, far } = this.orthographicCameraParams
    const aspect = calcAspect(container)
    this.orthographicCameraParams = {
      left: -zoom * aspect,
      right: zoom * aspect,
      top: zoom,
      bottom: -zoom,
      near,
      far,
      zoom
    }
  }
  // 创建渲染
  createRenderer() {
    const { rendererParams } = this
    const renderer = new THREE.WebGLRenderer(rendererParams)
    renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.resizeRendererToDisplaySize()
    this.container.appendChild(renderer.domElement)
    this.renderer = renderer
    this.renderer.setClearColor(0x000000, 0)
  }
  // 调整渲染器尺寸
  resizeRendererToDisplaySize() {
    const { renderer } = this
    if (!renderer) {
      return
    }
    const canvas = renderer.domElement
    const pixelRatio = window.devicePixelRatio
    const { clientWidth, clientHeight } = canvas
    const width = (clientWidth * pixelRatio) | 0
    const height = (clientHeight * pixelRatio) | 0
    const isResizeNeeded = canvas.width !== width || canvas.height !== height
    if (isResizeNeeded) {
      renderer.setSize(width, height, false)
    }
    return isResizeNeeded
  }
  // 创建网格
  createMesh(
    meshObject: MeshObject,
    container: THREE.Scene | THREE.Mesh = this.scene
  ) {
    const {
      geometry = new THREE.BoxGeometry(1, 1, 1),
      material = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#d9dfc8")
      }),
      position = new THREE.Vector3(0, 0, 0)
    } = meshObject
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.copy(position)
    container.add(mesh)
    return mesh
  }
  // 创建光源
  createLight() {
    const dirLight = new THREE.DirectionalLight(new THREE.Color("#ffffff"), 0.5)
    dirLight.position.set(0, 50, 0)
    this.scene.add(dirLight)
    const ambiLight = new THREE.AmbientLight(new THREE.Color("#ffffff"), 0.4)
    this.scene.add(ambiLight)
  }
  // 创建轨道控制
  createOrbitControls() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    const { lookAtPosition } = this
    controls.target.copy(lookAtPosition)
    controls.update()
    this.controls = controls
  }
  // 监听事件
  addListeners() {
    this.onResize()
  }
  // 监听画面缩放
  onResize() {
    window.addEventListener("resize", (e) => {
      if (this.shaderMaterial) {
        this.shaderMaterial.uniforms.uResolution.value.x = window.innerWidth
        this.shaderMaterial.uniforms.uResolution.value.y = window.innerHeight
        this.renderer.setSize(window.innerWidth, window.innerHeight)
      } else {
        if (this.camera instanceof THREE.PerspectiveCamera) {
          const aspect = calcAspect(this.container)
          const camera = this.camera as THREE.PerspectiveCamera
          camera.aspect = aspect
          camera.updateProjectionMatrix()
        } else if (this.camera instanceof THREE.OrthographicCamera) {
          this.updateOrthographicCameraParams()
          const camera = this.camera as THREE.OrthographicCamera
          const { left, right, top, bottom, near, far } =
            this.orthographicCameraParams
          camera.left = left
          camera.right = right
          camera.top = top
          camera.bottom = bottom
          camera.near = near
          camera.far = far
          camera.updateProjectionMatrix()
        }
        this.renderer.setSize(
          this.container.clientWidth,
          this.container.clientHeight
        )
      }
    })
  }
  // 动画
  update() {
    console.log("animation")
  }
  // 渲染
  setLoop() {
    this.renderer.setAnimationLoop(() => {
      this.resizeRendererToDisplaySize()
      this.update()
      if (this.controls) {
        this.controls.update()
      }
      if (this.stats) {
        this.stats.update()
      }
      if (this.composer) {
        this.composer.render()
      } else {
        this.renderer.render(this.scene, this.camera)
      }
    })
  }
}

class DNAParticle extends Base {
  clock: THREE.Clock
  DNAMaterial: THREE.ShaderMaterial
  modifier: ModifierStack
  modelParts: THREE.Object3D[]
  points: THREE.Points
  bloomPass!: UnrealBloomPass
  caPass!: ShaderPass
  params: any
  bloomParams: any
  caParams: any
  constructor(sel: string, debug: boolean) {
    super(sel, debug)
    this.clock = new THREE.Clock()
    this.cameraPosition = new THREE.Vector3(0, 0, 5)
    this.perspectiveCameraParams = {
      fov: 60,
      near: 0.1,
      far: 100
    }
    this.params = {
      color1: "#612574",
      color2: "#293583",
      color3: "#1954ec",
      progress: 0,
      // size: 15,
      // gradMaskTop: 0.41,
      // gradMaskBottom: 0.72,
      size: 36,
      gradMaskTop: 0,
      gradMaskBottom: 0
    }
    this.bloomParams = {
      bloomStrength: 1.4,
      bloomRadius: 0.87,
      bloomThreshold: 0.23
    }
    this.caParams = {
      CAMaxDistortion: 0.25,
      CASize: 0.58
    }
  }
  // 初始化
  async init() {
    this.createScene()
    this.createPerspectiveCamera()
    this.createRenderer()
    this.createDNAMaterial()
    this.createSpiral()
    // await this.loadDNAModel();
    // this.createDNA();
    this.createLight()
    this.createPostprocessingEffect()
    this.mouseTracker.trackMousePos()
    this.createOrbitControls()
    // this.createDebugPanel();
    this.addListeners()
    this.setLoop()
  }
  // 创建材质
  createDNAMaterial() {
    const DNAMaterial = new THREE.ShaderMaterial({
      vertexShader: mainVertexShader,
      fragmentShader: mainFragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: {
          value: 0
        },
        uMouse: {
          value: new THREE.Vector2(0, 0)
        },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight)
        },
        uColor1: {
          value: new THREE.Color(this.params.color1)
        },
        uColor2: {
          value: new THREE.Color(this.params.color2)
        },
        uColor3: {
          value: new THREE.Color(this.params.color3)
        },
        uSize: {
          value: this.params.size
        },
        uGradMaskTop: {
          value: this.params.gradMaskTop
        },
        uGradMaskBottom: {
          value: this.params.gradMaskBottom
        },
        uProgress: {
          value: this.params.progress
        }
      }
    })
    this.DNAMaterial = DNAMaterial
  }
  // 创建球体
  createSphere() {
    const geometry = new THREE.SphereBufferGeometry(2, 64, 64)
    const material = this.DNAMaterial
    const points = new THREE.Points(geometry, material)
    this.points = points
    this.scene.add(points)
  }
  // 创建螺旋体
  createSpiral() {
    const geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 5, 3, 60)
    const material = this.DNAMaterial
    const points = new THREE.Points(geometry, material) as any

    const modifier = new ModifierStack(points)
    const twist = new Twist(360)
    twist.vector = new Vector3(0, 1, 0)
    modifier.addModifier(twist)
    this.modifier = modifier

    this.points = points
    this.scene.add(points)
  }
  // 加载DNA模型
  async loadDNAModel() {
    const model = await loadModel(DNAModelUrl)
    const modelParts = flatModel(model)
    printModel(modelParts)
    this.modelParts = modelParts
  }
  // 创建DNA
  createDNA() {
    const { modelParts } = this
    const twist1_1 = modelParts[1] as THREE.Mesh
    const geometry = twist1_1.geometry
    geometry.center()
    const material = this.DNAMaterial
    const points = new THREE.Points(geometry, material)
    points.position.y = -3
    this.points = points
    this.scene.add(points)
  }
  // 创建后期特效
  createPostprocessingEffect() {
    const composer = new EffectComposer(this.renderer)
    this.composer = composer

    const renderPass = new RenderPass(this.scene, this.camera)
    composer.addPass(renderPass)

    // unreal bloom
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.4,
      0.87,
      0.23
    )
    bloomPass.strength = this.bloomParams.bloomStrength
    bloomPass.radius = this.bloomParams.bloomRadius
    bloomPass.threshold = this.bloomParams.bloomThreshold
    composer.addPass(bloomPass)
    this.bloomPass = bloomPass

    // CA
    const caPass = new ShaderPass({
      vertexShader: caVertexShader,
      fragmentShader: caFragmentShader,
      uniforms: {
        tDiffuse: {
          value: null
        },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight)
        },
        uCAMaxDistortion: {
          value: this.caParams.CAMaxDistortion
        },
        uCASize: {
          value: this.caParams.CASize
        }
      }
    })
    caPass.renderToScreen = true
    composer.addPass(caPass)
    this.caPass = caPass
  }
  // 动画
  update() {
    const elapsedTime = this.clock.getElapsedTime()
    const mousePos = this.mouseTracker.mousePos
    if (this.DNAMaterial) {
      this.DNAMaterial.uniforms.uTime.value = elapsedTime
      this.DNAMaterial.uniforms.uMouse.value = mousePos
    }
    if (this.points) {
      this.points.rotation.y = elapsedTime * 0.1
    }
    if (this.bloomPass) {
      this.bloomPass.strength = this.bloomParams.bloomStrength
      this.bloomPass.radius = this.bloomParams.bloomRadius
      this.bloomPass.threshold = this.bloomParams.bloomThreshold
    }
    if (this.caPass) {
      this.caPass.uniforms.uCAMaxDistortion.value =
        this.caParams.CAMaxDistortion
      this.caPass.uniforms.uCASize.value = this.caParams.CASize
    }
    if (this.modifier) {
      this.modifier.apply()
    }
  }
  // 创建调试面板
  createDebugPanel() {
    const gui = new dat.GUI({ width: 300 })
    const { params, bloomParams, caParams } = this
    const uniforms = this.DNAMaterial.uniforms
    gui.addColor(params, "color1").onFinishChange((value) => {
      uniforms.uColor1.value.set(value)
    })
    gui.addColor(params, "color2").onFinishChange((value) => {
      uniforms.uColor2.value.set(value)
    })
    gui.addColor(params, "color3").onFinishChange((value) => {
      uniforms.uColor3.value.set(value)
    })
    gui.add(uniforms.uSize, "value").min(0).max(50).step(0.01).name("size")
    gui
      .add(uniforms.uGradMaskTop, "value")
      .min(0)
      .max(1)
      .step(0.01)
      .name("gradMaskTop")
    gui
      .add(uniforms.uGradMaskBottom, "value")
      .min(0)
      .max(1)
      .step(0.01)
      .name("gradMaskBottom")
    gui
      .add(uniforms.uProgress, "value")
      .min(0)
      .max(1)
      .step(0.01)
      .name("progress")
    gui.add(bloomParams, "bloomStrength").min(0).max(10).step(0.01)
    gui.add(bloomParams, "bloomRadius").min(0).max(10).step(0.01)
    gui.add(bloomParams, "bloomThreshold").min(0).max(10).step(0.01)
    gui.add(caParams, "CAMaxDistortion").min(0).max(10).step(0.01)
    gui.add(caParams, "CASize").min(0).max(10).step(0.01)
  }
}

const start = () => {
  const dnaParticle = new DNAParticle(".dna-particle", false)
  dnaParticle.init()
}

start()
</script>
<style lang="scss" scoped>
#dna {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
</style>
