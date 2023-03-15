// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","tlo2.png")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka","cicha_noc.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(0,100)


])
let lewo=true
onUpdate(()=>{
    if (gwiazda.pos.x<500 && lewo)
    gwiazda.pos.x +=1
    else if (!lewo && gwiazda.pos.x>0)
    {
        gwiazda.pos.x=gwiazda.pos.x-1
    }
    else if(!lewo && gwiazda.pos.x <=0)
    {
        lewo = true

    }
    else
    {
        lewo=false
    }
})

onKeyRelease("space",()=>play("muzyka"))



