package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/a-h/templ"
)

func main() {
    fs := http.FileServer(http.Dir("public"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    http.Handle("/", templ.Handler(App()))

    fmt.Println("Listening on http://localhost:3000")
    err := http.ListenAndServe(":3000", nil)
    if err != nil {
        log.Fatalln("failed to start portfolio: ", err.Error())
    }
}
