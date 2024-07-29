export const formatCcNumber=(value)=>{
    const digits= removeNonNumericChar(value);
    const formatted=digits.replace(/(\d{4})(?=\d)/g,'$1 ');
    return formatted;

}
export const formatCCinput = (event) => {
    const formattedValue=formatCcNumber(event.target.value);
    return formattedValue;

}
 

export const removeNonNumericChar=(value)=>{
    const digits= value.replace(/\D/g,'');
    return digits
}
const getExpiryDate=(value)=>{
    
    const digits= removeNonNumericChar(value);
    const formatted=digits.replace(/(\d{2})(?=\d)/,'$1/')
    return formatted;
}

export const formatExpiryDate=(event)=>{
    const formattedValue=getExpiryDate(event.target.value);
    return formattedValue; 
   
}

export const formatCVV=(event)=>{ 
        const value = event.target.value
        let f_CVV=removeNonNumericChar(value);
        return f_CVV
}


export const getCardType=(number)=>{
    //Remove non-digit characters
number = number.replace(/\D/g,'');
//pattern for different card types
const CardParterns={
    visa:/^4/,
    masterCard:/^5[1-5]/,
    amex:/^3[47]/,
    discover:/^6(?:011|5)/,
    diners:/^3(?:0[0-5]|[68])/,
    jcb:/^(?:2131|1800|35\d{3})/,

}
for(const [card,pattern] of Object.entries(CardParterns)){
    if(pattern.test(number)){
        return card;
    }
}
return 'unknown';

}

export const getCardImage=(creditCard)=>{
    const CardData=
    [
        {
            cardName:'visa',
            img:'visa'
        },
        {
            cardName:'mastercard',
            img:''
        },
        {
            cardName:'amex',
            img:''
        },
        {
            cardName:'discover',
            img:''
        },
        {
            cardName:'diners',
            img:''
        },
        {
            cardName:'jcb',
            img:''
        },

    ]
    
   const imageSrc=CardData.filter((data)=>{
    return (data.cardName===creditCard)
   })

   const imgUrl=imageSrc[0].img
   return imgUrl;
}