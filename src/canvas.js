/*jshint esversion: 6 */

$(document).ready(function(){
    var canvas = document.getElementById('canvas'),
    content = document.getElementById('home'),
    ctx = canvas.getContext('2d');
    canvas.height = content.offsetHeight;
    canvas.width = content.offsetWidth;
    var particles = [];
    var rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);};
    //ctx.globalAlpha = 0.2;

    Particle = function(x,y,radius,color,speed,direction){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.direction = direction;
        this.addorminus = 0.02;
    }
    
    Particle.prototype = {
        render: function(){
            ctx.beginPath();            
            ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
            grd = ctx.createLinearGradient(0, 0, canvas.width,0);
            grd.addColorStop(0, 'rgba(249, 109, 0, .75)');
            grd.addColorStop(0.5,'rgba(249, 109, 0, .5)')
            grd.addColorStop(1, 'rgba(249, 109, 0, 0)');
            ctx.strokeStyle = grd;
            //ctx.lineWidth = 2;
            //ctx.lineTo(this.x,this.y);
            ctx.stroke();
        },
        drawSine: function(){

        },
        update: function(){
            if(this.direction > 1|| this.direction < -1)
                this.addorminus *= -1;
            this.direction += this.addorminus;
            this.x += this.speed;
            this.y += this.speed*Math.sin(this.direction);
            if(this.x > canvas.width+200){
                this.x = 0;
                this.y = rand(0,canvas.height);
            }
        }
    }
    makeParticles = function(){
        var number = 50;
        for(var i = 0; i < number; i++){
            var particle = new Particle(rand(0,canvas.width),rand(0,canvas.height),0.3,'rgb(211, 228, 255)',2,0);
            particles.push(particle);
        }
    };

    var renderParticles = function(){
        for(var j = 0; j < particles.length; j++){
            particles[j].update();
            particles[j].render();
        }
    }

    var loop = function(){
        window.requestAnimationFrame(loop);
        ctx.fillStyle  = 'rgba(57, 62, 70,.3)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        renderParticles();
        //ctx.fillStyle = 'rgba(0, 0, 0,.05)';
        //ctx.fillRect(0, 0, myCanvas.width ,myCanvas.height);
        //console.log(particles)
        ctx.restore();
    };
    makeParticles();
    loop();

    $( window ).resize(function() {
        canvas.height = content.offsetHeight;
        canvas.width = content.offsetWidth;
        particles.length = 0;
        makeParticles();
    });
});