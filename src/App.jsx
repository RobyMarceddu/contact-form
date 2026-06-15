// ===== IMPORTS =====
// Importa i campi del form da un file JSON (configurazione dati)
// Imports the form fields from a JSON file (data configuration)
import formFields from "./data/formFields.json"
// Importa React e il hook useState per gestire lo stato del componente
// Imports React and the useState hook to manage component state
import React, { useState } from "react"

// ===== CLASSI CSS UTILITY =====
// Classi CSS riutilizzabili per gli input, così da non ripetere stringhe
// Reusable CSS classes for inputs, to avoid repeating long strings
const inputBase = "w-full px-4 py-3 border-2 rounded-lg text-grey-900 text-[16px] bg-white focus:outline-none focus:ring-0 shadow-none"
const inputNormal = `${inputBase} border-grey-500 hover:border-green-600 focus:border-green-600`  // Stato normale / Normal state
const inputError = `${inputBase} border-red`  // Stato errore / Error state

function App() {
  // ===== STATO DEL FORM =====
  // Oggetto che contiene i valori correnti di tutti i campi
  // Object that holds the current values of all fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  })

  // Oggetto che contiene i messaggi di errore per ogni campo (vuoto = nessun errore)
  // Object that holds error messages for each field (empty = no errors)
  const [errors, setErrors] = useState({})
  // Booleano che indica se il form è stato inviato con successo
  // Boolean that indicates whether the form was submitted successfully
  const [submitted, setSubmitted] = useState(false)

  // ===== GESTIONE CAMBIO INPUT =====
  // Ogni volta che l'utente scrive in un input, questa funzione aggiorna lo stato
  // Every time the user types in an input, this function updates the state
  function handleChange(e) {
    const { name, value, type, checked } = e.target  // Legge i dati dall'elemento HTML / Reads data from the HTML element
    setFormData({
      ...formData,  // Copia tutti i valori esistenti / Copies all existing values
      [name]: type === "checkbox" ? checked : value,  // Checkbox salva "checked" (boolean), gli altri salvano "value" / Checkbox saves "checked" (boolean), others save "value"
    })
  }

  // ===== VALIDAZIONE FORM =====
  // Controlla tutti i campi obbligatori e restituisce un oggetto con gli errori trovati
  // Checks all required fields and returns an object with the errors found
  function validateForm() {
    const newErrors = {}  // Oggetto locale, non ancora nello stato / Local object, not yet in state

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      // Regex per validare il formato email: qualcosa@qualcosa.qualcosa
      // Regex to validate email format: something@something.something
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.queryType) {
      newErrors.queryType = "Please select a query type"
    }
    if (!formData.message.trim()) {
      newErrors.message = "This field is required"
    }
    if (!formData.consent) {
      newErrors.consent = "To submit this form, please consent to being contacted"
    }

    return newErrors  // Restituisce l'oggetto con gli errori / Returns the object with errors
  }

  // ===== SUBMIT DEL FORM =====
  // Viene chiamato quando l'utente preme il pulsante Submit
  // Called when the user clicks the Submit button
  function handleSubmit(e) {
    e.preventDefault()  // Impedisce il refresh della pagina / Prevents page refresh

    const newErrors = validateForm()  // Valida tutti i campi / Validates all fields
    setErrors(newErrors)  // Salva gli errori nello stato / Saves errors in state

    if (Object.keys(newErrors).length === 0) {  // Se non ci sono errori / If there are no errors
      setSubmitted(true)  // Mostra il toast di successo / Shows success toast
    }
  }

  // ===== RENDERING UI =====
  return (
    // Contenitore principale: sfondo verde, centra il contenuto verticalmente e orizzontalmente
    // Main wrapper: green background, centers content vertically and horizontally
    <main className="min-h-screen bg-green-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[736px]">

        {/* ===== TOAST DI SUCCESSO ===== */}
        {/* Appare sopra la card quando il form viene inviato correttamente */}
        {/* Appears above the card when the form is successfully submitted */}
        {submitted && (
          <div className="bg-grey-900 text-white rounded-xl p-5 mx-auto w-[60%] mb-0 relative z-10">
            <div className="flex items-center gap-2 mb-1">
              {/* Icona spunta verde / Green check icon */}
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h2 className="text-[20px] font-bold">Message Sent!</h2>
            </div>
            <p className="text-grey-500 text-[16px]">Thanks for completing the form. We'll be in touch soon!</p>
          </div>
        )}

        {/* ===== CARD BIANCA DEL FORM ===== */}
        <div className="bg-white rounded-2xl p-8 md:p-10">
          <h1 className="text-[32px] font-bold text-grey-900 mb-6">Contact Us</h1>

          {/* Il form chiama handleSubmit al submit / The form calls handleSubmit on submit */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* ===== GRID: FIRST NAME + LAST NAME ===== */}
            {/* Su desktop (md:) stanno affiancati in 2 colonne, su mobile uno sotto l'altro */}
            {/* On desktop (md:) they sit side by side in 2 columns, on mobile stacked */}
            <div className="grid gap-5 md:grid-cols-2">
              {formFields.slice(0, 2).map((field) => (  // Primi 2 campi del JSON / First 2 fields from JSON
                <div key={field.name}>
                  <label className="block text-[16px] font-medium mb-2 text-grey-900">
                    {field.label} {field.required && <span className="text-grey-500">*</span>}  {/* Asterisco per campi obbligatori / Asterisk for required fields */}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={errors[field.name] ? inputError : inputNormal}  // Bordo rosso se errore / Red border if error
                  />
                  {errors[field.name] && (
                    <p className="text-red text-sm mt-1">{errors[field.name]}</p>  // Messaggio di errore / Error message
                  )}
                </div>
              ))}
            </div>

            {/* ===== CAMPI RIMANENTI ===== */}
            {/* Email, Query Type, Message, Consent — dal 3° campo in poi del JSON */}
            {/* Email, Query Type, Message, Consent — from the 3rd field onwards in JSON */}
            {formFields.slice(2).map((field) => (
              <div key={field.name}>

                {/* Radio buttons (Query Type) */}
                {field.type === "radio" ? (
                  <React.Fragment>
                    <label className="block text-[16px] font-medium mb-2 text-grey-900">
                      {field.label} {field.required && <span className="text-grey-500">*</span>}
                    </label>
                    <div className="flex gap-4">
                    {field.options.map((opt) => {
                      const isSelected = formData[field.name] === opt.value
                      return (
                        <label key={opt.value} className={`flex items-center gap-3 border-2 rounded-lg p-3 flex-1 cursor-pointer transition-colors ${isSelected ? 'bg-green-200 border-green-600' : 'border-grey-500 hover:border-green-600'}`}>
                          <input
                            type="radio"
                            name={field.name}
                            value={opt.value}
                            checked={isSelected}
                            onChange={handleChange}
                            className="accent-green-600 w-4 h-4"
                          />
                          <span className="text-grey-900 text-[16px]">{opt.label}</span>
                        </label>
                      )
                    })}
                    </div>
                    {errors[field.name] && (
                      <p className="text-red text-sm mt-1">{errors[field.name]}</p>
                    )}
                  </React.Fragment>
                ) : field.type === "checkbox" ? (
                  // Checkbox (Consent)
                  <React.Fragment>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name={field.name}
                        checked={formData[field.name]}  // checked è un boolean / checked is a boolean
                        onChange={handleChange}
                        className="accent-green-600 w-[18px] h-[18px]"
                      />
                      <span className="text-grey-900 text-[16px]">{field.label} {field.required && <span className="text-grey-500">*</span>}</span>
                    </label>
                    {errors[field.name] && (
                      <p className="text-red text-sm mt-1">{errors[field.name]}</p>
                    )}
                  </React.Fragment>
                ) : (
                  // Textarea e input normali (Email, Message)
                  <React.Fragment>
                    <label className="block text-[16px] font-medium mb-2 text-grey-900">
                      {field.label} {field.required && <span className="text-grey-500">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={errors[field.name] ? inputError : inputNormal}
                        rows="4"
                      />
                    ) : (  // Input generico per tipo "email" / Generic input for "email" type
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={errors[field.name] ? inputError : inputNormal}
                      />
                    )}
                    {errors[field.name] && (
                      <p className="text-red text-sm mt-1">{errors[field.name]}</p>
                    )}
                  </React.Fragment>
                )}
              </div>
            ))}

            {/* ===== PULSANTE SUBMIT ===== */}
            {/* Sfondo verde, hover più scuro / Green background, darker on hover */}
            <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg font-bold text-[16px] hover:bg-green-700 transition-colors mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

// Esporta il componente per usarlo in main.jsx
// Exports the component to be used in main.jsx
export default App
