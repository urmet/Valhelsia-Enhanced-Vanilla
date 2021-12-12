// priority: 10

onEvent('recipes', function (event) {

  // Minecraft
  event.shaped('minecraft:cobweb', [
    'AA',
    'AA'
  ], {
    A: 'minecraft:string'
  })

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: 'minecraft:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  })

  event.shaped('minecraft:dispenser', [
    'RS ',
    'RDS',
    'RS '
  ], {
    R: 'minecraft:stick',
    S: 'minecraft:string',
    D: 'minecraft:dropper'
  })

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  })

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  })

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  
  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: 'minecraft:string',
    C: 'farmersdelight:canvas'
  })
  
  // Additional Enchanted Miner
  event.shaped('quarryplus:quarry', [
    'AFA',
    'BEB',
    'CDC'
  ], {
    A: 'techreborn:advanced_circuit',
    B: 'techreborn:extractor',
    C: 'techreborn:steel_plate',
    D: 'techreborn:advanced_drill',
    E: 'techreborn:iridium_ingot',
    F: 'techreborn:advanced_machine_frame',
  })
})
