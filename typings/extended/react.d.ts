import React from 'react'

declare module 'react' {
  interface DOMAttributes<T> {
    on?: string
  }
}
