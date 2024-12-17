How it works?

Each new user sends the /start command(for example), gets the startIsUsed property updated in their session, from then on any subsequent message sent by the user faster than 600ms will not be processed.

So if I send 10 /start messages within 600ms, one will be processed.
