const player = {
  currentHealth: 10,
  attackPower: 1,
  gold: 0,
  potions: 0
}

function healPlayer() {
  // STUB
}

function attackEnemy() {
  // STUB
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  // TODO finish the rest of the player attributes 
  document.getElementById('hero-gold').innerText = '🪙 ' + player.gold
  document.getElementById('hero-potions').innerText = '🧪 ' + player.potions
  document.getElementById('hero-attack').innerText = '⚔️ ' + player.attackPower
}

function drawCurrentEnemy() {
  document.getElementById('enemy-health').innerText = '💖 ' + currentEnemy.health
  document.getElementById('enemy-gold').innerText = '🪙 ' + currentEnemy.gold
  document.getElementById('enemy-attack').innerText = '⚔️ ' + currentEnemy.attackPower
  document.getElementById('enemy-type').innerText = currentEnemy.type
}

function enemyTurn() {
  let enemyDamage = Math.floor(Math.random() * currentEnemy.maxAttackPower)
  (player.currentHealth -= enemyDamage)
  messageUser("Your health has been reduced by " + enemyDamage + " points.")
  if (player.currentHealth <= 0) {
    messageUser("You died!")
    showGameOver()
  }
}

function rewardPlayer() {
  // STUB
}

function buyPotion() {
  // STUB
}

function increaseAttack() {
  // STUB
}

drawPlayer()