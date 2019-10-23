class Scribbler
{
  float prevX =0, prevY=0;
  
  float Theta;
  float Distance;
  
  float ThetaV;
  float DistanceV;

  bool mvTheta = false;

  float anchorX, anchorY;

  float strokeW;
  byte strokeC;

  public Scribbler(float x, float y)
  {
    prevX = x;
    prevY = y;
    anchorX = x;
    anchorY = y;
    randomVelocities();
    Theta = random(TWO_PI);
    strokeW = round(1 + random(3));
    strokeC = round(random(255));
  }
  
  void Update()
  {
    float curX = anchorX + (cos(Theta) * Distance);
    float curY = anchorY + (sin(Theta) * Distance);
    
    pushStyle();
    stroke(strokeC);
    strokeWeight(Distance * strokeW * 0.01);
    line(prevX, prevY, curX, curY);
    popStyle();
    
    prevX = curX;
    prevY = curY;
    
    if(mvTheta)
    {
      Theta += ThetaV;
    }
    else
    {
       Distance += DistanceV;
    }
    
    if(random() > 0.9)
    {
       swapMode();
    }
    
  }
  
  void swapMode()
  {
     mvTheta = !mvTheta;
     randomVelocities();
  }
  
  void randomVelocities()
  {
     ThetaV = -0.05 + random(0.1);
     DistanceV = 0.2 + random();
  }

}

ArrayList<Scribbler> scrblrs = new ArrayList();

void setup()
{
  size(600,600);
  background(255);
  
  for(int i=0; i < 30; i++)
  {
    scrblrs.add(new Scribbler(300,300));
  }
  noSmooth();
}

void draw()
{
  for(Scribbler scrblr : scrblrs)
  	scrblr.Update();
}