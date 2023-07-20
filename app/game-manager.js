// TODO: Define currentEnemy so the computer stops getting mad.
// TODO: Finish all game-manager functions.

const player = {
  currentHealth: 10,
  attackPower: 1,
  gold: 0,
  potions: 0
}

function healPlayer() {
  if (player.potions >= 1) {
    player.potions--
    player.currentHealth = player.currentHealth + 10
    enemyTurn()
    drawPlayer()
    drawCurrentEnemy() }
    else {
      (messageUser("You have no potions!"))
  }
}

function attackEnemy() {
  enemyTurn()
  (currentEnemy.health -= player.attack)
  if (currentEnemy.health <= 0) {
    rewardPlayer()
    pickRandomEnemyFromCurrentStage()
  drawPlayer()
  drawCurrentEnemy()
  }
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
  (player.gold += currentEnemy.gold)
  if (player.gold >= 10000) {
    messageUser("You won!")
    showVictory()
  }
}

function buyPotion() {
  if (player.gold >= 5) {
    // TODO: complete this function
  }
    else {

    }
}

function increaseAttack() {
  // TODO: complete this function
}

drawPlayer()