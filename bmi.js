function output()
{
    var h=document.getElementById("height").value;
    var w=document.getElementById("weight").value;
    var b=(w)/((h/100)**2);
    document.getElementById("yr").textContent="Your Results";
    document.getElementById("d").textContent="BMI Value:"+b;
    if (b<18.5)
    {
        document.getElementById("c").textContent="Under Weight!";
    }
    else if(b<24.9)
    {
        document.getElementById("c").textContent="Normal weight!";
        
    }
    else if(b<29.9)
    {
        document.getElementById("c").textContent="Over weight";
        
    }
    else if(b<34.9)
    {
        document.getElementById("c").textContent="Class-1 Obesity weight";
        
    }
    else if(b<39.9)
    {
        document.getElementById("c").textContent="Class-2 Obesity weight";
        
    }
    else if(b<100)
    {
        document.getElementById("c").textContent="Class-3 Obesity weight";
        
    }
    else
    {
        document.getElementById("c").textContent="Enter valid input!";
        
    }
}
    