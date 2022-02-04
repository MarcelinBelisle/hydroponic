
//#include <SoftwareSerial.h> 
//SoftwareSerial MyBlue(0, 1); // RX | TX 
#include <Arduino.h>
#include "DHT.h"
#define Atomizer 7
#define DHTPIN 12     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11 

#define TdsSensorPin A1
#define VREF 5.0 // analog reference voltage(Volt) of the ADC
#define SCOUNT 1 // sum of sample point
int analogBuffer[SCOUNT]; // store the analog value in the array, read from ADC
int analogBufferTemp[SCOUNT];
int analogBufferIndex = 0,copyIndex = 0;
float averageVoltage = 0,tdsValue = 0,temperature = 25;


int pHSense = A0;
int samples = 10;
float adc_resolution = 1024.0;

DHT dht(DHTPIN, DHTTYPE);



int water = 2;
int phDown = 3;
int growA = 4;
int growB = 5;
int fan = 6;



int state = '0';
// how much time there is between switching to the next pump.
int TimeBetweenPours = 1000;

void setup(){

Serial.begin(9600);
//MyBlue.begin(9600);
pinMode(TdsSensorPin,INPUT);
   delay(100);
    Serial.println("cimpleo pH Sense");

     dht.begin();

     
   
  pinMode(2, OUTPUT); 
  pinMode(3, OUTPUT); 
  pinMode(4, OUTPUT); 
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(Atomizer, OUTPUT);

  

// My relayboard is a "low true" board. So setting the output to low energize the relay's. You don't want that yhey all switch on when powering on the cocktailmaker...

  digitalWrite(2,HIGH);
  digitalWrite(3,HIGH);
  digitalWrite(4,HIGH);
  digitalWrite(5,HIGH);
  digitalWrite(6,HIGH);
  

}

float ph (float voltage) {
   return 7 + ((2.475 - voltage) / 0.18);
}


void loop(){
//delay(20000);
  int measurings=0;

    for (int i = 0; i < samples; i++)
    {
        measurings += analogRead(pHSense);
        delay(10);
    }

  float voltage = 5 / adc_resolution * measurings/samples;
    Serial.print("pH= ");
    Serial.println(ph(voltage));
    delay(3000);
    
   // if (MyBlue.available()) 
  // Serial.write(MyBlue.read()); 
  

  
  delay(2000);
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  float f = dht.readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  // Compute heat index in Fahrenheit (the default)
  float hif = dht.computeHeatIndex(f, h);
  // Compute heat index in Celsius (isFahreheit = false)
  float hic = dht.computeHeatIndex(t, h, false);

    if(h>=38){                           //if the humidity % is equal or above the setpoint (h) the atomizer stops
    digitalWrite(6,LOW);
    digitalWrite(Atomizer,LOW);
    Serial.print("Atomizer off, fan on");
    }



    if(h<38){                      //Otherwise it will be on and it will show "On" on the display alongside the current temperature and humidity
    digitalWrite(6,HIGH);
    digitalWrite(Atomizer,HIGH);
    Serial.print("Atomizer on, fan off");
    }

  Serial.print(F(" Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("C "));
  Serial.print(f);
  Serial.print(F("F  Heat index: "));
  Serial.print(hic);
  Serial.print(F("C "));
  Serial.print(hif);
  Serial.println(F("F"));


  
static unsigned long analogSampleTimepoint = millis();
if(millis()-analogSampleTimepoint > 40U) //every 40 milliseconds,read the analog value from the ADC
{
analogSampleTimepoint = millis();
analogBuffer[analogBufferIndex] = analogRead(TdsSensorPin); //read the analog value and store into the buffer
analogBufferIndex++;
if(analogBufferIndex == SCOUNT)
analogBufferIndex = 0;
}
static unsigned long printTimepoint = millis();
if(millis()-printTimepoint > 800U)

{
printTimepoint = millis();
for(copyIndex=0;copyIndex<SCOUNT;copyIndex++)
analogBufferTemp[copyIndex]= analogBuffer[copyIndex];
averageVoltage = getMedianNum(analogBufferTemp,SCOUNT) * (float)VREF/ 1024.0; // read the analog value more stable by the median filtering algorithm, and convert to voltage value
float compensationCoefficient=1.0+0.02*(temperature-25.0); //temperature compensation formula: fFinalResult(25^C) = fFinalResult(current)/(1.0+0.02*(fTP-25.0));
float compensationVolatge=averageVoltage/compensationCoefficient; //temperature compensation
tdsValue=(133.42*compensationVolatge*compensationVolatge*compensationVolatge - 255.86*compensationVolatge*compensationVolatge + 857.39*compensationVolatge)*0.5; //convert voltage value to tds value
//Serial.print("voltage:");
//Serial.print(averageVoltage,2);
//Serial.print("V ");
Serial.print("TDS Value:");
Serial.print(tdsValue,0);
Serial.println("ppm");

}


if(Serial.available() > 0){ // Checks whether data is comming from the serial port
    state = Serial.read(); // Reads the data from the serial port
   Serial.println(state);
}


 if( ph(voltage) >= 7){
      state = 'd'; 
    }

 if( tdsValue <= 400){
      state = 'a'; 
   }

// Set-up water
if (state == 'w') {
  Serial.println("Set-up water");
  Mix(10000,0,0,0);
 }
 
// Set-up phDown
if (state == 'd') {
  Serial.println("Set-up phDown");
  Mix(0,0,0,0);
 }
 
 // Set-up growA
if (state == 'a') {
  Serial.println("Set-up growA");
  Mix(0,0,0,0);
 }
 
//  // Set-up growB
//if (state == 'b') {
//  Serial.println("Set-up growB");
//  Mix(0,0,0,500);
// }

 
 }

    


 int getMedianNum(int bArray[], int iFilterLen)
{
int bTab[iFilterLen];
for (byte i = 0; i<iFilterLen; i++)
bTab[i] = bArray[i];
int i, j, bTemp;
for (j = 0; j < iFilterLen - 1; j++)
{
for (i = 0; i < iFilterLen - j - 1; i++)
{
if (bTab[i] > bTab[i + 1])
{
bTemp = bTab[i];
bTab[i] = bTab[i + 1];
bTab[i + 1] = bTemp;
}
}
}
if ((iFilterLen & 1) > 0)
bTemp = bTab[(iFilterLen - 1) / 2];
else
bTemp = (bTab[iFilterLen / 2] + bTab[iFilterLen / 2 - 1]) / 2;
return bTemp;
}

void Mix(int DelayTimewater, int DelayTimephDown, int DelayTimegrowA, int DelayTimegrowB) {
  
  state = 0;
  delay(800);
  
  digitalWrite(water, LOW);   
  delay(DelayTimewater);            
  digitalWrite(water, HIGH); 
  delay(TimeBetweenPours);   

  digitalWrite(phDown, LOW);   
  delay(DelayTimephDown);            
  digitalWrite(phDown, HIGH); 
  delay(TimeBetweenPours);  

  digitalWrite(growA, LOW);   
  delay(DelayTimegrowA);            
  digitalWrite(growA, HIGH); 
  delay(TimeBetweenPours);  

  digitalWrite(growB, LOW);   
  delay(DelayTimegrowB);            
  digitalWrite(growB, HIGH); 
  delay(TimeBetweenPours);


  Serial.println("Pouring is done!"); 
  state = 0;
}

    
