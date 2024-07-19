/*
@title:Island with Waves, Trees, and Ship
*/

bt.setRandSeed(1688);

const width = 200;
const height = 200;
const roughness = 5;
const detail = 3;
const islandSize = 50;
const waveSize = 15;
const waveCount = bt.randIntInRange(3, 7);
const treeCount = bt.randIntInRange(5, 10);

setDocDimensions(width, height);

function drawIrregularIsland(x, y, size) {
  let points = [];
  let angle = 0;
  while (angle < 360) {
    angle += bt.randIntInRange(10, 20);
    let radius = size + bt.randInRange(-10, 10);
    let px = radius * Math.sin(angle * Math.PI / 180);
    let py = radius * Math.cos(angle * Math.PI / 180);
    points.push([px, py]);
  }
  points.push([points[0][0], points[0][1]]);
  bt.translate([points], [x, y])
  return points;
}
function drawWave(x, y, size, angle) {
    let points = [];
    let radius = size;
    while (angle < 360) {
      angle += bt.randIntInRange(10, 30);
      radius = bt.randInRange(radius - 1, radius + 1);
      let px = radius * Math.sin(angle * Math.PI / 180);
      let py = radius * Math.cos(angle * Math.PI / 180);
      points.push([px, py]);
    }
    points.push([points[0][0], points[0][1]]);
    bt.translate([points], [x, y])
    return points;
  }
