//ch=5
//Q=1
document.write('//Q=1<br>')
var firstnum=+prompt('enter 1st number')
var secondnum=+prompt('enter 2nd number')
var addition=firstnum+secondnum
document.write('sum of '+firstnum+' and '+secondnum+' is '+addition+'<br>')
//Q=2
document.write('//Q=2<br>')
var subtraction=firstnum-secondnum
document.write('subtraction of '+firstnum+' and '+secondnum+' is '+subtraction+'<br>')
var multiplication=firstnum*secondnum
document.write('product '+firstnum+' and '+secondnum+' is '+multiplication+'<br>')
var divide=firstnum/secondnum
document.write('divisible of '+firstnum+' and '+secondnum+' is '+divide+'<br>')
var modulus=firstnum%secondnum
document.write('modulus of '+firstnum+' and '+secondnum+' is '+modulus+'<br>')

//Q=3
document.write('//Q=3<br>')
var number
number=+prompt('please enter a number')
document.write('the number you entered is '+number+'<br>')
++number
document.write('the number you entered after increment is '+number+'<br>')
number=number+7
document.write('the number you entered after addition of 7 is '+number+'<br>')
--number
document.write('the number you entered after decrement is '+number+'<br>')
number=number%2
document.write('the modulus is '+number+'<br>')

//Q=4
document.write('//Q=4<br>')
var ticketprice=600
var totaltickets=5
var totalcost=ticketprice*totaltickets
document.write('total price of 5 tickets is '+totalcost+'<br>')

//Q=5
document.write('//Q=5<br>')
var num=+prompt('enter a number you want table of!')
document.write(num+'x1 = '+ num*1+'<br>')
document.write(num+'x2 = '+ num*2+'<br>')
document.write(num+'x3 = '+ num*3+'<br>')
document.write(num+'x4 = '+ num*4+'<br>')
document.write(num+'x5 = '+ num*5+'<br>')
document.write(num+'x6 = '+ num*6+'<br>')
document.write(num+'x7 = '+ num*7+'<br>')
document.write(num+'x8 = '+ num*8+'<br>')
document.write(num+'x9 = '+ num*9+'<br>')
document.write(num+'x10 = '+ num*10+'<br>')

//Q=6
document.write('//Q=6<br>')
var celsius=25
var farhenite=(celsius*9/5)+32
document.write('farhenite temp is '+farhenite+'<br>')
var farhenite2=70
var celsius2=(farhenite2-32)*5/9
document.write('celsius temp is '+celsius2+'<br>')

//Q=7
document.write('//Q=7<br>')
var priceofitem1=+prompt('enter the price of 1st item')
var quantityofitem1=+prompt('enter the quantity you want 1st item')
var priceofitem2=+prompt('enter the price of 2nd item')
var quantityofitem2=+prompt('enter the quantity you want 1st item')
var shippingcharges=100
var totalcost=(priceofitem1*quantityofitem1)+(priceofitem2*quantityofitem2)+shippingcharges
document.write('total cost of your order is '+totalcost+'<br>')

//Q=8
document.write('//Q=8<br>')
var totalmarks=+prompt('please enter total marks')
var marksobtained=+prompt('please enter obtained marks')
var percentage=(marksobtained/totalmarks)*100
document.write('total marks = '+totalmarks+'<br>')
document.write('marks obtained by student = '+marksobtained+'<br>')
document.write('percentage = '+percentage+'%<br>')

//Q=9
document.write('//Q=9<br>')
var USdollarIhave=+prompt('enter dollars quantity you have')
var RiyalsIhave=+prompt('enter the PKR quantity you have')
var totaldollarinPKR=USdollarIhave*104.8
var totalRiyalsinPKR=RiyalsIhave*28
var totalrupees=totalRiyalsinPKR+totaldollarinPKR
document.write('total rupees you have ='+totalrupees+'<br>')

//Q=10
document.write('//Q=10<br>')
var number1=+prompt('please anter a number')
var result=((number1+5)*10)/2
document.write('(number you entered+5)'+'x10/2 = '+result+'<br>')

//Q=11
document.write('//Q=11<br>')
var currentyear=+prompt('enter current year')
var birthyear=+prompt('enter birth year')
var yourage=currentyear-birthyear
document.write('current year = '+currentyear+'<br>')
document.write('your birth year = '+birthyear+'<br>')
document.write('your age is = '+yourage+'<br>')

//Q=12
document.write('//Q=12<br>')
var radius=20
var circumference=2*3.142*radius
var area=3.142*(radius*radius)
document.write('radius = '+radius+'<br>')
document.write('circumference = '+circumference+'<br>')
document.write('area = '+area+'<br>')

//Q=13
document.write('//Q=13<br>')
var favsnack=prompt('anter your favourite snack')
var currentage=+prompt('enter your current age')
var max_estimattedage=+prompt('enter your maximum estimetted age')
var amountofsnackperday=3
var result=(max_estimattedage-currentage)*365*amountofsnackperday
document.write('your favourite snack = '+favsnack+'<br>')
document.write('your current age = '+currentage+'<br>')
document.write('your maximum estimated age = '+max_estimattedage+'<br>')
document.write('you will need total snacks = '+result+'<br>')