import Canvas from "@/components/canvas/Canvas";

export default function canvaspage() {
  var res =
    '[{"signs":[3],"planets":[],"planets_small":[],"planet_signs":[]},{"signs":[3,4],"planets":[],"planets_small":[],"planet_signs":[]},{"signs":[4,5],"planets":[],"planets_small":[],"planet_signs":[]},{"signs":[5,6],"planets":[],"planets_small":[],"planet_signs":[]},{"signs":[6,7,8],"planets":["Sun","Saturn"],"planets_small":["Su ","Sa "],"planet_signs":[7,7]},{"signs":[8,9],"planets":["Mercury","Venus","Ketu"],"planets_small":["Me ","Ve ","Ke "],"planet_signs":[8,8,8]},{"signs":[9],"planets":["Jupiter"],"planets_small":["Ju "],"planet_signs":[9]},{"signs":[9,10],"planets":["Mars"],"planets_small":["Ma "],"planet_signs":[10]},{"signs":[10,11],"planets":[],"planets_small":[],"planet_signs":[]},{"signs":[11,12],"planets":[],"planets_small":[],"planet_signs":[]},{"signs":[12,1,2],"planets":["Moon"],"planets_small":["Mo "],"planet_signs":[1]},{"signs":[2,3],"planets":["Rahu"],"planets_small":["Ra "],"planet_signs":[2]}]';
  var jsonobject1 = JSON.parse(res);
  return (
    <div>
      <Canvas width={350} height={350} birthchart={jsonobject1} />
    </div>
  );
}
