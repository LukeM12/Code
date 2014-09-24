import java.io.*;
import java.util.*;

/* This Class serializes the string into a Card Object Array, Sorts the array based on value, and checks to see if it is a flush, or something like that
*
*/
class Hand {
    private ArrayList<Card> hand;
    private HashMap<Integer, Integer> Pairs; //This is the Value : Number pair. for example a fulle house. you will have {Queen:2, King:3}
    private String handString;
    private boolean isFlush;
    private boolean isStraight;
    private int HighCard;
    public Hand(String handCards){
        this.handString = handCards;
        this.hand = CreateHand(); //upon creation, sort hand
        this.Pairs = new HashMap<Integer, Integer>();
        this.isFlush = true;
        this.isStraight = true;
        this.HighCard = 0;
        this.checkHand(); //Associate the value of the hand
    }

    /*
     * This method cuts the string into an array of Strings that are each a representation of a card 
     *@param String handstring : Space separated String of cards. Example ("AD QS KD 4S 7S")
     *return String[] elements : a String array of each card strin
     */
    public String[] ChopHand(String handString){
        ArrayList<String> and = new ArrayList<String>();
        String[] elements = handString.split(" ");
        return elements;
    }

    /*
     * This method creates a local list of Card Objects as the "hand"
     *return ArrayList<Card> returnHand : The Card Object Array Hand
     */
    public ArrayList<Card> CreateHand(){
        /* Divide the string into subcomponents */
        String[] Cards = this.ChopHand(this.handString);

        if (Cards == null){
            return null;
        }
        /* Create the hand of Card Objects */
        ArrayList<Card> returnHand = new ArrayList<Card>();
        for (int i=0; i < Cards.length; i++){
            String type = Cards[i].substring(0,1); 
            String val = Cards[i].substring(1,2); 
            returnHand.add(new Card(type, val));
        }

        /* Now we have a hand of cards, what do we do */
        /* We need to sort the cards */
        /* So that we can check for pairs or straights easily */
        returnHand = mergeSort(returnHand);
        return returnHand;
    }


    public Card getCard(int index){
        return this.hand.get(index);
    }
    /*
     *Checks to see if a hand is a flush
     *Checks to see if a hand is a straight
     */
    public void checkHand(){
        ArrayList<Card> Hand = this.hand;
        //Lets peek at the next one at all times
        for (int i=0; i < 4; i++){
            //Check to see if it is a straight, and if we already flagged this variable
            if (Hand.get(i).getValue() + 1 != Hand.get(i+1).getValue() ){
                this.isStraight = false;
            }
            //Check to see if it is a Suit
            if ( !(  Hand.get(i+1).getSuit().equals ( Hand.get(i).getSuit() ) )  ){
                this.isFlush = false;
            }
            //Check to see if it is a pair
            if ( (Hand.get(i + 1).getValue() == Hand.get(i).getValue()) ) {
                //Does a pair already exist?
                if (this.Pairs.get(Hand.get(i).getValue()) != null){
                    Integer count = new Integer( this.Pairs.get( Hand.get(i).getValue() ));
                    count++;
                    
                    this.Pairs.put(Hand.get(i).getValue(), count );
                }
                //Make a new pair
                else {
                    this.Pairs.put(Hand.get(i).getValue(), new Integer(2) );
                }
            }
            //Get the highCard. Only time the highcard doesnt matter is when it is part of a pair, because we will check that too
            else {
                if (this.Pairs.get(Hand.get(i)) != null  && Hand.get(i).getValue() > this.HighCard ){
                    this.HighCard = Hand.get(i).getValue();
                }
            }
        }
        //Make sure the high card isnt hiding at the back of the list
        //NOTE :
        //The High Card is also the end of a straight. 
        if (( Hand.get(4).getValue() != Hand.get(3).getValue()) && (Hand.get(4).getValue() > this.HighCard)){
            this.HighCard = Hand.get(4).getValue();
        }
       
    }
    /*
      *Getters for Poker Value hands 
      */

    public boolean getFlush(){
        return this.isFlush;
    }
    public boolean getStraight(){
        return this.isStraight;
    }
    public HashMap<Integer, Integer> getPairs(){
        return this.Pairs;
    }
    public int getHighCard(){
        return this.HighCard;
    }

    public ArrayList<Card> mergeSort(ArrayList<Card> Hand){
        if (Hand.size() <= 1 ) {
            return Hand;
        }

        //Split the list
        ArrayList<Card> first = new ArrayList<Card> ();
        ArrayList<Card> second = new ArrayList<Card> ();
        int mid = Hand.size() / 2;
        for (int i = 0; i < Hand.size() ; i ++){
            if ( i < mid){
                first.add(Hand.get(i));
            }
            else {
                second.add(Hand.get(i));
            }
        }

        //The Lists are split, now let us sort them
        first = this.mergeSort(first);
        second = this.mergeSort(second);
        
        Hand = merge(first, second);
        return Hand;
    }   

    public ArrayList<Card> merge(ArrayList<Card> first, ArrayList<Card> second){
        int findex = 0;
        int sindex = 0;
        int hindex = 0;//I do not use this variable
        int size = first.size() + second.size();
        ArrayList<Card> Hand = new ArrayList<Card>();//I do not use this variabl
        while ( (findex < first.size()) && (sindex < second.size()) ) {
            if (first.get(findex).getValue() < second.get(sindex).getValue() ){
                Hand.add(first.get(findex));
                findex++;
            }
            else {
                Hand.add(second.get(sindex));
                sindex++;
            }
        }
        //copy the rest
        while (findex < first.size()){
                Hand.add(first.get(findex));
                findex++;

        }

        while (sindex < second.size()){
                Hand.add(second.get(sindex));
                sindex++;
        }
        return Hand;     
    }

    public void PrintHand(){
        for (int i = 0; i < 5; i++){
            //get a card from the original getcard class
            System.out.println(this.getCard(i).getCard());
        }
        System.out.println("Flush = "+ this.isFlush);
        System.out.println("Straight = "+ this.isStraight);
        System.out.println("High Card = " + this.HighCard);
        System.out.print("Pairs = ");

        if (this.Pairs.size() <= 0 ) {
            System.out.print(" None");
        }
        else {
            System.out.println("Are these");
            for (Integer key : this.Pairs.keySet()) {
                System.out.println("     Card Number = " + key);
                System.out.println("     Repeats of Card = " + this.Pairs.get(key));
            }
        }
        System.out.println("");
    }


}


