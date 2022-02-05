package main

import (
	"fmt"
	"reflect"
)

func main() {
	/*
		var message string
		message := "Hello yeah!"
		var number int
		var b bool
		fmt.Println(reflect.TypeOf(message))
		fmt.Println(reflect.TypeOf(number))
		fmt.Println(reflect.TypeOf(b))
		fmt.Println(message)
		fmt.Println(number)
		fmt.Println(b)
	*/

	printMessage("Вызов 1")
	printMessage("Вызов 2")
	printMessage("Вызов 3")

}
func printMessage(message string) {
	fmt.Println(message)
	fmt.Println(reflect.TypeOf(message))
}
func sayHello(name string) string {
	return "Привет, " + name
}