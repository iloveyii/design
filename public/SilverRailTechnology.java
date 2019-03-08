import java.io.*;
import java.net.*;

// What would be the output
// 1 : TUFF TUFF TÅG
// 2 : TUFF TUFF TUFF
// 3 : TÅG TUFF TÅG

public class Test {

    static class A {
        public String toString() {
            return "TÅG ";
        }
    }


    static class B extends A {
        public String toString() {
            return "TUFF ";
        }
    }


    public static void main(String[] args) {
        A obj = new B();
        System.out.print(obj);
        System.out.print((B) obj);
        System.out.print((A)(obj));
    }
}

