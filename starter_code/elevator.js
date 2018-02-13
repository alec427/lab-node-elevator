class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
    this.direction = 'up'
  }

  start() {
   let interval = setInterval(()=>this.update(), 1000);
  }
  stop() {
    
    clearInterval(interval)

  }
  update() {
  this.log()
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { 
    if (this.floor<this.MAXFLOOR) {
      this.floor++
    }
  }
  floorDown() {
    if(this.floor<= this.MAXFLOOR)
    this.floor--
   }
  call(param) { 
    
    this.requests.push (param)
    console.log(this.requests.length)
  }
  log() { 
  console.log(`Direction : ${this.direction} | Floor : ${this.floor}`)
  }
}

module.exports = Elevator;
