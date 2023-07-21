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
  currentEnemy.health -= player.attackPower
  if (currentEnemy.health <= 0) {
    rewardPlayer()
    pickRandomEnemyFromCurrentStage()
  }
  drawPlayer()
  drawCurrentEnemy()
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  document.getElementById('hero-gold').innerText = '🪙 ' + player.gold
  document.getElementById('hero-potions').innerText = '🧪 ' + player.potions
  document.getElementById('hero-attack').innerText = '⚔️ ' + player.attackPower
}

function drawCurrentEnemy() {
  document.getElementById('enemy-health').innerText = '💖 ' + currentEnemy.health
  document.getElementById('enemy-gold').innerText = '🪙 ' + currentEnemy.gold
  document.getElementById('enemy-attack').innerText = '⚔️ ' + currentEnemy.maxAttackPower
  document.getElementById('enemy-type').innerText = currentEnemy.type
}

function enemyTurn() {
  const enemyDamage = Math.floor(Math.random() * currentEnemy.maxAttackPower)
  player.currentHealth -= enemyDamage
  messageUser("Your health has been reduced by " + enemyDamage + " points.")
  drawPlayer()
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
    player.potions++
    player.gold = player.gold - 5
    messageUser("You have bought one potion!")
    drawPlayer()
  }
    else {
      messageUser("You do not have enough gold!")
    }
}

function increaseAttack() {
  if (player.gold >= 10) {
    player.attackPower++
    player.gold = player.gold -10
    messageUser("Your attack power has been increased!")
    drawPlayer()
  }
    else {
      messageUser("You do not have enough gold!")
  }
}

drawPlayer()