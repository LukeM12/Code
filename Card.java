import java.io.*;
import java.util.*;

public class Card{
    public String name;
    public String type;
    public int num;
    public String ERROR;
    public Card(String Num, String Suit){
        if ( Suit.equals("D") ){
            type = "Diamonds";
        }
        else if (Suit.equals("S")){
            type = "Spades";
        }
        else if (Suit.equals("C")){
            type = "Clubs";
        }
        else if (Suit == "H"){
            type = "Hearts";
        }

        //Throw error if no suit is found
        else {
            ERROR = "No Suit Found!";
        }
        //Assign each Card A number Value
        /*  Get the Value */
        if (Num.equals("A")){
            num = 0;
        }

        else  if (Num.equals("J")){
            num = 11;
        }
        else if (Num.equals("Q")){
            num = 12;
        }
        else if (Num.equals("K")){
            num = 13;
        }
        /* It must be an integer, or a bad character */
        else {
            int foo = Integer.parseInt(Num);
            if (foo > 9 || foo < 0){
                ERROR = "No int found";
            }
            num = foo;
        }
    }

    public String getCard(){
        return this.getValue() + this.getSuit();
    }

    public int getValue(){
        return this.num;
    }
    public String getSuit(){
        return this.type;
    }




    /* Operrations to See if they won */
}
