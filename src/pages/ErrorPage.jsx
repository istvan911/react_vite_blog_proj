import React, { useState, useEffect } from 'react';

// ErrorPage Component
const ErrorPage = ({ errorMessage }) => {

    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };

      const currentDate = new Date();
      const formatted = new Intl.DateTimeFormat('hu-HU', options).format(currentDate);

  return (
    <div className="error-container">
      <h1 className="error-title">Hoppá! Valami hiba történt...</h1>
      <p className="error-text">
        A probléma itt található: <strong>{errorMessage}</strong>
      </p>
      <p className="error-date">Aktuális dátum: {formatted}</p>
    </div>
  );
};

export default ErrorPage;
