class Item {
  constructor( name ) {
    this.name = name;
  }
}

class Weapon extends Item {
  constructor( name, damage ){
    super( name );
    this.damage = damage;
  }
}

class Food extends Item {
  constructor ( name, energy ){
    super( name );
    this.energy = energy;
  }
}



class Player {
  constructor( name, health, strength, speed ){
    this._pack = [];
    this._maxHealth = health;

    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this.equipped = false;
  }

  getPack (){
    return this._pack;
  }

  getMaxHealth (){
    return this._maxHealth;
  }

}


 Player.prototype.checkPack = function (){
  var pack = this.getPack();
  console.log( pack );
  return pack;
 };

Player.prototype.takeItem = function ( item ){
  var isItemStored = false;

  if( this.getPack().length < 3 ) {
    console.log( this.name, item );
    this.getPack().push( item );
    isItemStored = true;
  } else {
    console.log( 'pack is full' );
  }
  console.log( isItemStored );
};


Player.prototype.discardItem = function ( item ){
  var pack = this.getPack();
  var itemSlot = pack.indexOf( item );
  var isDiscarded = false;

  if ( itemSlot > -1 ){
    pack.splice( itemSlot,1 );
    isDiscarded = true;

    console.log( this.name );
    this.checkPack();
  } else {
    console.log( 'item could not be found' );
  }
  return isDiscarded;
};


Player.prototype.equip = function ( itemToEquip ){
  var isWeaponInPack = ( itemToEquip instanceof Weapon ) && ( this.checkPack().indexOf(itemToEquip) > -1 );

  if ( isWeaponInPack ){

    this.discardItem( itemToEquip );
    if ( this.equipped !== false ) { //if not empty handed
      this.takeItem( this.equipped );
    }
    this.equipped = itemToEquip;

  } else {
    console.log( 'can only equip weapons.' );
  }
};


Player.prototype.eat = function ( itemToEat ){
  var isFoodFromPack = this.checkPack().indexOf( itemToEat ) > -1 && itemToEat instanceof Food;
  var energyWithFoodConsumption = this.health + itemToEat.energy;
  if ( isFoodFromPack ){
    this.discardItem( itemToEat );
    if( this.getMaxHealth() > energyWithFoodConsumption ) {
      this.health += itemToEat.energy;
    } else {
      this.health = this.getMaxHealth();
}
  }
};


Player.prototype.useItem = function ( item ){

  switch ( true ){
    case ( item instanceof Weapon ):
      this.equip(item);
      break;
    case ( item instanceof Food ):
      this.eat(item);
      break;
    default:
      console.log( 'item cannot be used' );
      break;
  }
};


Player.prototype.equippedWith = function (){
  var equippedItemName = '';
  if ( this.equipped ){
    equippedItemName = this.equipped.name;
  } else {
    equippedItemName = false;
  }
  console.log ( this.name );

  if ( equippedItemName ){
    console.log( equippedItemName );
  } else {
    console.log('nothing is equipped');
  }

  return equippedItemName;
};



class Zombie {
  constructor ( health, strength, speed ){
    this._maxHealth = health;

    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
  }
}


class FastZombie extends Zombie {
  constructor ( health, strength, speed ){
    super( health, strength, speed );

  }
}


class StrongZombie extends Zombie {
  constructor ( health, strength, speed ){
    super( health, strength, speed );
  }
}


class RangedZombie extends Zombie {
  constructor ( health, strength, speed ){
    super( health, strength, speed );
  }
}


class ExplodingZombie extends Zombie {
  constructor ( health, strength, speed ){
    super( health, strength, speed );
  }
}


function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
