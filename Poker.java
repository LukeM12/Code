import java.io.*;
import java.util.*;

public class Poker {
    //public ArrayList<Hand> Hands;
    public boolean startGame;

    public Poker(){}

    public Hand isBetterHand(Hand Hand1, Hand Hand2){
        //If they are both royal flushes get the highcard
        if ( Hand1.getFlush() == Hand1.getStraight() ==  true ) {
            if ( Hand2.getFlush() == Hand2.getStraight() ==  true ) {
                if (Hand1.getHighCard() > Hand2.getHighCard()){
                    return Hand1;
                }
                else {
                    return Hand2;
                }
            }
            //If we have one royal flush return that highcard
            else {
                return Hand1;
            }
        }
        //If Hand 2 has a royal flush, return it
        if ( Hand2.getFlush() == Hand2.getStraight() ==  true ) {
            return Hand2;    
        }
        //Next we check both for 4 of a kind
        if (Hand1.getPairs().get(0) == 4 && Hand2.getPairs().get(0) == 4 ) {
            return Hand1.getHighCard() > Hand2.getHighCard() ? Hand1: Hand2;
        } 
        //Check either one for 4 of a kind
        if (Hand1.getPairs().get(0) == 4){
            return Hand1;
        }
        if (Hand2.getPairs().get(0) == 4){
            return Hand2;
        }

        HashMap<Integer, Integer> Pairs1 = Hand1.getPairs();
        HashMap<Integer, Integer> Pairs2 = Hand2.getPairs();
        
        //Check for full house 
        if ( (Pairs1.size() > 1 ) &&  (Pairs1.get(0) > 2 || Pairs1.get(1) > 2)) {
                if ( (Pairs1.size() > 1 ) && (Pairs2.size() > 1) && (Pairs2.get(0) > 2 || Pairs2.get(1) > 2)) {
                        //You need to validate the Pair. You need to validate the pair, and if one of them has a higher pair, than you need to get the high card
                    //This is actually fundamentally incorrect, the current implmenetation
                        
                        return Hand1.getHighCard() > Hand2.getHighCard() ? Hand1 : Hand2;
                }
                return Hand1;
        }
        if ( (Pairs2.size() > 1 ) && (Pairs2.size() > 1) && (Pairs2.get(0) > 2 || Pairs2.get(1) > 2) ) {
            return Hand2;
        }
        


        //Check for Flushes
        if (Hand1.getFlush() && Hand2.getFlush() ){
            return Hand1.getHighCard() > Hand2.getHighCard() ? Hand1 : Hand2;
        }
        if ( Hand1.getFlush()){
                return Hand1;
        }
        if ( Hand2.getFlush()){
                return Hand2;
        }
        
        //Check for straights
        if (Hand1.getStraight() && Hand2.getStraight() ){
            return Hand1.getHighCard() > Hand2.getHighCard() ? Hand1 : Hand2;
        }
        if ( Hand1.getStraight()){
                return Hand1;
        }
        if ( Hand2.getStraight()){
                return Hand2;
        }
        //Check for 3 of a kind 
        if (Pairs1.size() == 1 && Pairs1.get(0) == 3 ) {
            if (Pairs2.size() == 1 && Pairs2.get(0) == 3) {
                return Hand1.getHighCard() > Hand2.getHighCard() ? Hand1 : Hand2;
            }
            return Hand1;
        }
        if (Pairs2.size() == 1 && Pairs2.get(0) == 3) {
            return Hand2;
        }
        //Check
       // if (Pairs1.size() > 1 && Pairs2.size() ) {
        if ( Pairs1.size() > 1 && Pairs2.size() > 1){
            return Hand1.getHighCard() > Hand2.getHighCard() ? Hand1 : Hand2;
        }
        if (Pairs1.size() > 1) {
        


        return Hand2;


    }

    public static void main(String []args){
        ArrayList<Hand> Hands = new ArrayList<Hand>();
        //startGame = prompt user
        Hand a  = new Hand("AS 1S 3S 2S 4D");
        Hand b  = new Hand("AD 1D 3D 2D 4D");
        Hand c  = new Hand("AS 1S 3S 2S 4D");
        Hand d  = new Hand("AS 1S 3S 2S 4D");
        Hand e  = new Hand("AS 1S 3S 2S 4D");
        Hands.add(a);
        Hands.add(b);
        Hands.add(c);
        Hands.add(d);
        Hands.add(e);
        Poker poker = new Poker();
        a = poker.isBetterHand(a,b);
        a.PrintHand();

    }
    public Hand Winner(ArrayList<Hand> Hands){
        Hand BestHand = new Hand("AS 1D 2S 3C 5S"); //give the worst hand imaginable as a dummy
        for (int i = 0; i < Hands.size(); i++) {
           BestHand = isBetterHand(BestHand, Hands.get(i)); 
        }
        return BestHand;
    }

}
