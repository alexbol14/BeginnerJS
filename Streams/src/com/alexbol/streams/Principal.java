package com.alexbol.streams;

import java.io.FileReader;
import java.io.FileWriter;

public class Principal {

	public static void main(String[] args) {
		String texto = "Hola haloo";
		String ruta = "D:/Programmierung/Java/EjemploStreams/";
		String nombreArchivo ="miarchivo.txt";
		try {
			FileWriter archivo = new FileWriter(ruta+nombreArchivo);
			archivo.write(texto);
			archivo.close();
		} catch (Exception e) {
			System.out.println(e);
		}
	}

}
