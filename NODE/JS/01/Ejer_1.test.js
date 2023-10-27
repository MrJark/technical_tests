import { describe, it } from 'node:test'

import { ping } from './Ejer_1.js'
import { equal, ifError } from 'node:assert/strict'


describe( '1. ping', () => {
  it( '1.1. ping mrjark.com', ( _, done ) => {
    ping( 'mrjark.com', ( err, info ) => {
      ifError( err )
      equal( info.ip, 'mrjark.com' )
      done()
    } )
  } )
} )