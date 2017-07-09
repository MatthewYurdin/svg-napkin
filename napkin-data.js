
//TODO add fill-color property for shapes
var Svgs = {
  "soccer":{"Dim":{"Width":500,"Height":500},"Title":"Soccer Results by Fan Interest","Desc":"This illustration shows something along with something else.","Special":null,"Name":"test-group",
	"Sections":
	 [{"Dim":{"Width":250,"Height":250},"Name":"container-1","Translate":null, "Description":"Loren Ipsum bla bla bla",
	    "Content":[
	    	{"Purpose":"Text","Size":null,"X":10,"Y":20,"Alignment":"left","Color":"Black","textString":"DOES THIS LOOK LIKE MY WRITING?","Special":null,"Name":"my-text"},
	    	{"Purpose":"Line","X1":60,"Y1":25,"X2":60,"Y2":225,"Color":"Black","Special":null,"Name":"axis-line-1"},
	    	{"Purpose":"Line","X1":60,"Y1":225,"X2":225,"Y2":225,"Color":"Black","Special":null,"Name":"axis-line-2"},
	    	{"Purpose":"Symbol","Type":"Circle","X":125,"Y":175,"Width":10,"Height":10,"Color":"Blue","Special":null,"Name":"circle-1"},
	    	{"Purpose":"Symbol","Type":"Circle","X":200,"Y":50,"Width":10,"Height":10,"Color":"Blue","Special":null,"Name":"circle-2"},
	    	{"Purpose":"Polygon","Coordinates":[[10,240],[10,10],[240,10]],"Color":"Orange","Special":null,"Name":"triangle-shape"},
	    	{"Purpose":"Symbol","Type":"Square","X":200,"Y":35,"Width":20,"Height":20,"Color":"Red","Special":null,"Name":"square-1"},
	    	{"Purpose":"Symbol","Type":"Square","X":55,"Y":180,"Width":20,"Height":20,"Corlor":"Red","Special":null,"Name":"square-2"}

	    ]
	   }
	 ]
  },
  "tree":{}
};


//General attribute data
var Colors = {"Black":"#000","Blue":"#1F75FE","Red":"#FF496C","Green":"#3D9979", "Orange":"#ff4500","Purple":"#7851A9"};

//TODO add text size scale conversion values

//TODOS -add lowercase writing and other characters
//      -fill function for circles, squares, rectangles
//      -remake the test fit function
//      -axis helper function
var Hand = {"Sizes": {"Default":[12,18],"Scaled":[1.2,1.6]},
            "Data":{"0":null}
};
		
	Hand.Data["65"] = ["0", "30", "25", "l 4 -20 c 3 -10, 5 -10, 7 0 c 2 20, 2 26, 4 21 m -2 -16 l -10 3"];//A
	Hand.Data["66"] = ["0", "27", "30", "l 4 -24  a 8 6 180 1 1 2 12  a 10 8 190 1 1 -6 12"];//B
	Hand.Data["67"] = ["13", "5", "15", "c -19 -5, -19 35, 4 17"];//C
	Hand.Data["68"] = ["4", "4", "25", "l -4 26 c 21 -5, 28 -18, 2 -29"];//D
	Hand.Data["69"] = ["4","6","20","q -9 27, -4 24, 4 2, 15 -2 m -11 -22 l 13 -2 m -17 15 l 13 -2"];//E
	Hand.Data["70"] = ["0", "30", "20", "l 4 -26 m -2 3 l 13 -4 m -15 16 l 13 -2"];//F
	Hand.Data["71"] = ["13", "5", "15", "c -6 -2, -13 9, -10 22 c 5 2, 12 2, 14 -6 c -1 -2, -3 -3, -4 -1"];//G
	Hand.Data["72"] = ["0", "30", "25", "l 4 -26 m 9  27 l 4 -26 m -17 10 l 17 0"];//H
	Hand.Data["73"] = ["0","30","15","l 4 -26"];//I
	Hand.Data["74"] = ["2", "18", "25", "c 0 22, 18 12, 9 -16 m -9 4 l 16 -3"];//J
	Hand.Data["75"] = ["0", "30", "25", "l 4 -26 m 14 0 c -2 2, -12 16, -14 13 l 4 12"];//K
	Hand.Data["76"] = ["4","3","20","q -9 30, -4 27, 4 2, 15 -2"];//L
	Hand.Data["77"] = ["0","30","25","l 4 -27 q 5 22, 10 0 l 3 27"];//M
	Hand.Data["78"] = ["0", "30", "25", "l 4 -26 c 5 30, 8 25, 13 -3"];//N
	Hand.Data["79"] = ["0","19","25","c 0 -24, 20 -24, 15 0  c  0 13, -15 13, -15 0"];//O
	Hand.Data["80"] = ["0", "30", "25", "l 4 -20 a 10 5 140 1 1 -1 7"];//P
	Hand.Data["81"] = ["0", "19", "25", "c 0 -24, 20 -24, 17 0  c  0 13, -15 13, -17 0 m 9 -3 c 5 4, 11 14, 9 11"];//Q
	Hand.Data["82"] = ["0", "30", "25", "l 3 -15 c 3 -35, 32 -10, 0 0 c  7 -5, 10 10, 10 15"];//R
	Hand.Data["83"] = ["18", "7", "10", "c -18 -7, -18 8, -6 10 c 8 2, 8 23, -9 13"];//S
	Hand.Data["84"] = ["5","30","20","l 4 -24 m -9 1 l 18 -3"];//T
	Hand.Data["85"] = ["1", "2", "25", "c 0 33, 11 33, 19 0 l -3 28"];//U
	Hand.Data["86"] = ["1", "2", "25", "c 3 0, 5 18, 7 28 c 6 -10, 9 -30, 11 -30"];//V
	Hand.Data["87"] = ["0", "2", "25", "c 1 33, 2 33, 7 16 c 3 17, 6 17, 11 -16"];//W
	Hand.Data["88"] = ["0", "2", "25", "c 5 3, 10 12, 16 28 m -14 0 l 14 -29"];//X
	Hand.Data["89"] = ["2","3","20","c 0 15, 10 15, 10 2 l -2 23 c 0 2, -6 2, -7 -3"];//Y
	Hand.Data["90"] = ["4", "4", "30", "c 16 -4, 21 2, 5 12 c -9 9, -9 14, 17 9"];//Z
	//0 to 9
	Hand.Data["48"] = ["0", "19", "25", "c 0 -24, 20 -24, 15 0  c  0 13, -15 13, -15 0 m 1 11 l 15 -29"];//0
	Hand.Data["49"] = ["0", "30", "15", "l 4 -29"];//1
	Hand.Data["50"] = ["4", "6", "25", "c 16 -16, 16 6, -3 24 c 5 -5, 15 -7, 21 -3"];//2
	Hand.Data["51"] = ["4", "4", "25", "l 13 -2 l -13 10 c 20 -4, 16 23, -4 15"];//3
	Hand.Data["52"] = ["2", "3", "25", "q -12 22, 13 12 m 0 -12 l -4 27"];//4
	Hand.Data["53"] = ["17", "2", "17", "l -12 1 l -3 9 c 28 -12, 15 39, -1 15"];//5
	Hand.Data["54"] = ["15", "2", "17", "c -25 17, -15 27, -13 27 c 21 5, 23 -20, -4 -8"];//6
	Hand.Data["55"] = ["2", "3", "20", "l 18 -2 c -10 5, -14 13, -19 29 m 1 -16 l 12 -2"];//7
	Hand.Data["56"] = ["17", "1", "13", "c 23 -1, -27 24, -7 29 c 20 -10, -20 -30, 7 -29"];//8
	Hand.Data["57"] = ["12", "30", "13", "l 2 -25 c -9 30, -19 -5, 3 -5"];//9
	//Special characters
	Hand.Data["39"] = ["-2", "0", "7", "l -1 8"]; //' (apostrophe)
	Hand.Data["44"] = ["-2", "28", "7", "l -2 8"]; //, (comma)
	Hand.Data["45"] = ["-4", "15", "19", "l 11 -1"]; //- (dash)
	Hand.Data["38"] = ["12", "30", "15", "c -30 -40 22 -40 -12 -8 c -4 6 8 10 16 -4"]; //& (ampersand)
	Hand.Data["46"] = ["-5", "30", "10", "c 3 -3, 3 3, 0 0"]; //. (period)
	Hand.Data["58"] = ["-5", "25", "10", "c 3 -3, 3 3, 0 0 m 2 -12 c 3 -3, 3 3, 0 0"]; //: (colon)
	Hand.Data["34"] = ["-3", "0", "9", "l -2 8 m 6 -8 l -1 6"]; //" (quotation marks)
	Hand.Data["40"] = ["5", "0", "8", "c -5 10, -5 20, 2 30"]; //( (left parentheses)
	Hand.Data["41"] = ["0", "0", "8", "c 5 10, 8 22, -1 31"]; //) (right parentheses)
	Hand.Data["43"] = ["10", "26", "15", "l 3 -16 m -8 10 c 3 -1, 6 -3, 12 -2 "]; // plus sign
	Hand.Data["36"] = ["18", "7", "10", "c -18 -7, -18 8, -6 10 c 8 2, 8 23, -9 13 m 4 7 l 4 -36"]; // dollar sign
	Hand.Data["64"] = ["12", "21", "10", "l -4 -13 c 4 16 -12 16 -1 -1 m 5 14 c -30 20 -10 -55  3 -2 "]; //@ (at symbol)
	Hand.Data["63"] = ["0", "10", "15", "c 0 -20, 20 -10, 0 12 m 0 6 c 3 -3, 3 3, 0 0"]; //? (question mark)
	Hand.Data["33"] = ["5", "2", "15", "l -5 20 m -2 6 c 3 -3, 3 3, 0 0"]; // exclamation point
	Hand.Data["47"] = ["2", "30", "22", "l 16 -24"]; // forward slash


