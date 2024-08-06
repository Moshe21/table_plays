      // server.mjs
      const socket = new WebSocket('ws://localhost:8080');

      socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          const cell = document.querySelector(`#${data.gridId} .cell:nth-child(${data.index + 11})`);
          if (cell) {
              cell.style.backgroundColor = data.color;
          }
      };
      // run with `node server.mjs`