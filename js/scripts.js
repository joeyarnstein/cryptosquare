var encrypt = function(string){
  return string.toLowerCase().replace(/ /g,'').replace(/[!@#$%^&*()-=_+|;':",.<>?']/g,'');
};
