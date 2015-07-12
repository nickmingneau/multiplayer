var floor;

function createFloor(){
	var geometry = new THREE.BoxGeometry( 100, 1, 100 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	floor = new THREE.Mesh( geometry, material );
	floor.position.y = -1;
	scene.add( floor );
}
createFloor();
