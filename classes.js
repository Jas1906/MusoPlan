class Musician {// start musician
    constructor(){
        this.musician_name="";
        this.years_playing="";
        this.hourly_rate="";
        this.interesting_fact="";

    }
    set musicianName(mname){
        if(mname.length>=3 && mname.length<=30){
            this.musician_name=mname;
        }
        else{
            console.log("musician name should be between 3 and 30 characters");
        }
    }
    get musicianName(){
        return this.musician_name
    }
    set yearsPlaying(yplaying){
        if(yplaying>=0){
            this.years_playing=yplaying;
        }
        else{
            console.log("Value should not be negative");
        }
    }
    get yearsPlaying(){
        return this.years_playing;
    }
    set hourlyRate(hrate){
        if(hrate>50){
            this.hourly_rate=hrate;
        }
        else{
            console.log("rate should be over 50");
        }
    }
    get hourlyRate(){
        return this.hourly_rate;
    }
    set interestingFact(ifact){
        this.interesting_fact=ifact
    }
    get interestingFact(){
        return this.interesting_fact
    }

}// end musician

class Troupe{// start troupe
    constructor(){
        this.troupe_name="";
        this.troupe_genre="";
        this.troupe_mduration="";
        this.member=[];

    }
    set troupeName(tname){
        if(tname.length>=3 && tname.length<=30){
            this.troupe_name=tname;
        }
        else{
            console.log("troupe name should be between 3 and 30 characters")
        }

    }
    get troupeName(){
        return this.troupe_name;
    }
    set troupeGenre(tgenre){
        if(tgenre=="rock"){
            this.troupe_genre=tgenre;
        }
        else if(tgenre=="jazz"){
            this.troupe_genre=tgenre;
        }
        else if(tgenre=="pop"){
            this.troupe_genre=tgenre;
        }
        else{
            console.log("genre should be either rock, jazz or pop");
        }
    }
    get troupeGenre(){
        return this.troupe_genre;
    }
    set troupeMDuration(tmduration){
        if(tmduration>=0.5 && tmduration<=3){
            this.troupe_mduration=tmduration
        }
        else{
            console.log("min duration should be between 0.5 and 3 hours");
        }
    }
    get troupeMDuration(){
        return this.troupe_mduration;
    }
}//end troupe

class Guitarist extends Musician{// start guitarist
    constructor(mname,yplaying,hrate,ifact){
        super(mname,yplaying,hrate,ifact);
            this.interesting_fact="The more strings you have, the better you are";

    }
}//end guitarist
class Bassist extends Musician{// start Bassist
    constructor(mname,yplaying,hrate,ifact){
        super(mname,yplaying,hrate,ifact);
        this.interesting_fact="Everyone loves a bassist";

    }
}//end bassist
class Percussionist extends Musician{// start Percussionist
    constructor(mname,yplaying,hrate,ifact){
        super(mname,yplaying,hrate,ifact);
        this.interesting_fact="Me drum";

    }
}//end Percussionist
class Flautist extends Musician{// start Flautist
    constructor(mname,yplaying,hrate,ifact){
        super(mname,yplaying,hrate,ifact);
        this.interesting_fact="1989 heavy metal instrument of the year"

    }
}//end Flautist

module.exports={Musician,Troupe,Guitarist,Bassist,Percussionist,Flautist};