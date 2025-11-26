package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
)

func main() {
    fs := http.FileServer(http.Dir("public"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    http.Handle("/", templ.Handler(App()))

    fmt.Println("Listening on :3000")
    http.ListenAndServe(":3000", nil)
}
