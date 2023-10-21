## Classes

<dl>
<dt><a href="#RiScript">RiScript</a></dt>
<dd><p>The entry point class. Holds a state and implements the evaluate command.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#exists">exists</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true of a given parameter is not null and not undefined.</p>
</dd>
</dl>

<a name="RiScript"></a>

## RiScript
The entry point class. Holds a state and implements the evaluate command.

**Kind**: global class  

* [RiScript](#RiScript)
    * [new RiScript(state)](#new_RiScript_new)
    * _instance_
        * [.state(value)](#RiScript+state) ⇒ <code>String</code>
        * [.execute()](#RiScript+execute) ⇒ <code>string</code>
    * _static_
        * [.states](#RiScript.states) ⇒ <code>Object</code>
        * [.validateState(value)](#RiScript.validateState)

<a name="new_RiScript_new"></a>

### new RiScript(state)
Constructor initializes the state. If none is given, it defaults to {'great'}.

**Throws**:

- if state is not a valid state


| Param | Description |
| --- | --- |
| state | one of the RiScript.state values |

<a name="RiScript+state"></a>

### RiScript.state(value) ⇒ <code>String</code>
Validates and sets a new state value if given and returns the updated value. If no defined value is given it just returns the
current state value.

**Kind**: instance method of [<code>RiScript</code>](#RiScript)  
**Returns**: <code>String</code> - the current state value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> \| <code>undefined</code> | optional state to be set. |

<a name="RiScript+execute"></a>

### RiScript.execute() ⇒ <code>string</code>
Executes with the current internal state.

**Kind**: instance method of [<code>RiScript</code>](#RiScript)  
**Returns**: <code>string</code> - the execution including the current state.  
<a name="RiScript.states"></a>

### RiScript.states ⇒ <code>Object</code>
The possible states of the RiScript.

**Kind**: static property of [<code>RiScript</code>](#RiScript)  
<a name="RiScript.validateState"></a>

### RiScript.validateState(value)
Validates a state. To be valid, the value needs to be part of the {RiScript.states}.
Throws an Error if invalid. Returns void / undefined if passed.

**Kind**: static method of [<code>RiScript</code>](#RiScript)  
**Throws**:

- if state is not a valid state


| Param | Description |
| --- | --- |
| value | The state candidate to be validated. |

<a name="exists"></a>

## exists ⇒ <code>boolean</code>
Returns true of a given parameter is not null and not undefined.

**Kind**: global constant  
**Returns**: <code>boolean</code> - true if defined, otherwise false  

| Param | Description |
| --- | --- |
| any | any input is feasible |

