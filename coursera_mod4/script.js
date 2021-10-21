var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jhalak";
names[4]="sam";
names[5]="frank";
names[6]="harry";
names[7]="paula";
names[8]="laura";
names[9]="jimmy";


for (var i = 0; i < names.length; i++)
{
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
	{
        console.log("Goodbye "+ names[i])
	}
	else
	{
		console.log("Hello "+ names[i])
	}
}
