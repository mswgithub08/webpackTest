
	//es6顶一个了类rect，使用class关键字，内部使用constructor定义构造函数，
	//方法间不用标点符号分隔。
	class rect
	{
		constructor(kuan,gao){
			this.kuan=kuan;
			this.gao=gao;
			this.cname="长方形"
		}
		mj(){console.log("area:"+this.kuan*this.gao);}
		zc(){console.log("zhouchang:"+2*(this.kuan+this.gao));}
	}
	
	var rect1=new rect(334,76);
	rect1.mj();
	rect1.zc();
	console.log(rect1.hasOwnProperty("kuan"));
	console.log(rect1.hasOwnProperty("mj"));
	console.log(rect1.__proto__.hasOwnProperty("mj"));
	console.log(rect.prototype)
	rect.prototype.say=function(){console.log(this.cname+"prototype")}
	//square继承在rect，使用extends关键词来完成继承
	class square extends rect
	{
		constructor(x){//构造函数，构造函数中要有super
			super(x,x);
			this.cname="正方形";
			//this一定要在super之后调用
		}
	}
	
	var s1=new square(66);
	s1.zc();//zc集成自rect
	s1.mj();
	s1.say();//可以集成使用prototype定义的方法和属性。
