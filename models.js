import { Context } from './utils/Context';
import './index.css'

const schoolContext = new Context('school', true, true, true, false);
schoolContext.addObjectToScene('developer', '/imports/developer/scene.gltf', 2, { x: 0, y: -1, z: 0 });

const workContext = new Context('work', true, true, true, false);
workContext.addObjectToScene('computer', '/imports/computer/scene.gltf', 0.1, { x: 0, y: -1, z: 0 });

function tickSchool () {
  const context = schoolContext;
  if(context.objects.developer){
    context.objects.developer.rotateX(0.05 * Math.PI / 180);
    context.objects.developer.rotateY(0.05 * Math.PI / 180);
  }
  context.primaryLight.position.set(context.camera.position.x + 10, context.camera.position.y + 5, context.camera.position.z + 2);
  context.renderer.render(context.scene, context.camera);
}

function tickWork () {
  const context = workContext;
  context.primaryLight.position.set(context.camera.position.x, context.camera.position.y + 3, context.camera.position.z + 3);
  context.renderer.render(context.scene, context.camera);
}

function tick(){
  requestAnimationFrame(tick);
  tickSchool();
  tickWork();
}

tick();

window.addEventListener('resize', () => {
  schoolContext.resize();
  workContext.resize();
});
