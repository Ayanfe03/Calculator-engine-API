const express = require('express');

// @desc POST Addition API Request
// @route POST /v1/calculator/add
// @access Public
const additionHandler = async (req, res) => {
  try {
   const { a, b } = req.body;
   if (typeof a !== 'number' || typeof b !== 'number') {
    res.status(400).json({ message: 'Input must be a number' });
    return;
   }
   const additionAPI = a + b;
   res.status(200).json(additionAPI);
   return;
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// @desc POST Subtraction API Request
// @route POST /v1/calculator/subtract
// @access Public
const subtractionHandler = async (req, res) => {
  try {
   const { a, b } = req.body;
   if (typeof a !== 'number' || typeof b !== 'number') {
    res.status(400).json({ message: 'Input must be a number' });
    return;
   }

   const subtractionAPI = a - b;
   const subtractionAPI2 = b - a

   if ( a >= b ) {
    res.status(200).json(subtractionAPI);
    return;
   } else if ( b >= a ) {
    res.status(200).json(subtractionAPI2);
    return;
   }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// @desc POST Multiplication API Request
// @route POST /v1/calculator/multiply
// @access Public

const multiplicationHandler = async (req, res) => {
  try {
   const { a, b } = req.body;
   if (typeof a !== 'number' || typeof b !== 'number') {
    res.status(400).json({ message: 'Input must be a number' });
    return;
   }
   const multiplicationAPI = a * b;
   res.status(200).json(multiplicationAPI);
   return;
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// @desc POST Division API Request
// @route POST /v1/calculator/divide
// @access Public

const divisionHandler = async (req, res) => {
  try {
   const { a, b } = req.body;
   if (typeof a !== 'number' || typeof b !== 'number') {
    res.status(400).json({ message: 'Input must be a number' });
    return;
   }
   
   if (a === 0 && b === 0) {
    res.status(400).json({ message: 'Undefined'});
    return;
   }

   if (b === 0) {
    res.status(400).json({ message: 'Cannot divide by zero'});
    return;
  }
  const divisionAPI = a / b;
  res.status(200).json(divisionAPI);
  return;
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  additionHandler,
  subtractionHandler,
  multiplicationHandler,
  divisionHandler
}