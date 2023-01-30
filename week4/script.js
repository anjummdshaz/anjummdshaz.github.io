var names=new Array();
names[0]="Yaakov";
names[1]="Johhny";
names[2]="Jenifr";
names[3]="stepnie";
names[4]="hagen";
names[5]="franksten";
names[6]="paula";
names[7]="pauly";
names[8]="jasen";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}