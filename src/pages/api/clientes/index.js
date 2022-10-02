
export default function handler(req, res) 
{if (req.method === 'GET') {
    handlerGet(req, res)
    
} else {
    res.status(405).send('Error')
}
  }

  function handlerGet(req, res) {
    res.status(200).json({
        id: 5,
        nome: 'Wallace',
        idade: 23
    })
  }
  