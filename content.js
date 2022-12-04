let data = [
    {
        "Keyword": "gasleft",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#gasleft-returns-uint64"
    },
    {
        "Keyword": "blockhash",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#blockhash-uint64-block-returns-bytes32"
    },
    {
        "Keyword": "msg",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#msg-properties"
    },
    {
        "Keyword": "tx",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#tx-properties"
    },
    {
        "Keyword": "block",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#block-properties"
    },
    {
        "Keyword": "assert",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#assert-bool"
    },
    {
        "Keyword": "revert",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#revert-or-revert-string"
    },
    {
        "Keyword": "require",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#require-bool-or-require-bool-string"
    },
    {
        "Keyword": "abi.decode",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#abi-decode-bytes-type-list"
    },
    {
        "Keyword": "abi.encode",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#abi-encode"
    },
    {
        "Keyword": "abi.encodeWithSelector",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#abi-encodewithselector-bytes4-selector"
    },
    {
        "Keyword": "abi.encodeWithSignature",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#abi-encodewithsignature-string-signature"
    },
    {
        "Keyword": "abi.encodePacked",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#abi-encodepacked"
    },
    {
        "Keyword": "abi.encodeCall",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#abi-encodecall-function"
    },
    {
        "Keyword": "Hash",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#hash"
    },
    {
        "Keyword": "keccak256",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#keccak256-bytes"
    },
    {
        "Keyword": "ripemd160",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#ripemd160-bytes"
    },
    {
        "Keyword": "sha256",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#sha256-bytes"
    },
    {
        "Keyword": "blake2_128",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#blake2-128-bytes"
    },
    {
        "Keyword": "blake2_256",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#blake2-256-bytes"
    },
    {
        "Keyword": "signatureVerify",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#signatureverify-address-public-key-bytes-message-bytes-signature"
    },
    {
        "Keyword": "addmod",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#addmod-uint-x-uint-y-uint-k-returns-uint"
    },
    {
        "Keyword": "mulmod",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#mulmod-uint-x-uint-y-uint-k-returns-uint"
    },
    {
        "Keyword": "readInt8",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readint8-uint32-offset"
    },
    {
        "Keyword": "readInt16LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readint16le-uint32-offset"
    },
    {
        "Keyword": "readInt32LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readint32le-uint32-offset"
    },
    {
        "Keyword": "readInt64LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readint64le-uint32-offset"
    },
    {
        "Keyword": "readInt128LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readint128le-uint32-offset"
    },
    {
        "Keyword": "readInt256LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readint256le-uint32-offset"
    },
    {
        "Keyword": "readUint16LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readuint16le-uint32-offset"
    },
    {
        "Keyword": "readUint32LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readuint32le-uint32-offset"
    },
    {
        "Keyword": "readUint64LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readuint64le-uint32-offset"
    },
    {
        "Keyword": "readUint128LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readuint128le-uint32-offset"
    },
    {
        "Keyword": "readUint256LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readuint256le-uint32-offset"
    },
    {
        "Keyword": "readAddress",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#readaddress-uint32-offset"
    },
    {
        "Keyword": "writeInt8",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeint8-int8-value-uint32-offset"
    },
    {
        "Keyword": "writeInt16LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeint16le-int16-value-uint32-offset"
    },
    {
        "Keyword": "writeInt32LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeint32le-int32-value-uint32-offset"
    },
    {
        "Keyword": "writeInt64LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeint64le-int64-value-uint32-offset"
    },
    {
        "Keyword": "writeInt128LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeint128le-int128-value-uint32-offset"
    },
    {
        "Keyword": "writeInt256LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeint256le-int256-value-uint32-offset"
    },
    {
        "Keyword": "writeUint16LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeuint16le-uint16-value-uint32-offset"
    },
    {
        "Keyword": "writeUint32LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeuint32le-uint32-value-uint32-offset"
    },
    {
        "Keyword": "writeUint64LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeuint64le-uint64-value-uint32-offset"
    },
    {
        "Keyword": "writeUint128LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeuint128le-uint128-value-uint32-offset"
    },
    {
        "Keyword": "writeUint256LE",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeuint256le-uint256-value-uint32-offset"
    },
    {
        "Keyword": "writeAddress",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writeaddress-address-value-uint32-offset"
    },
    {
        "Keyword": "writeString",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writestring-string-value-uint32-offset"
    },
    {
        "Keyword": "writeBytes",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#writebytes-bytes-value-uint32-offset"
    },
    {
        "Keyword": "print",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#print-string"
    },
    {
        "Keyword": "selfdestruct",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#selfdestruct-address-payable-recipient"
    },
    {
        "Keyword": ".format",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/builtins.html#string-formatting-using-format"
    },
    {
        "Keyword": "import",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/imports.html#imports"
    },
    {
        "Keyword": "pragma",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/pragmas.html#pragmas"
    }
];

// kad se ucita stranica
function getSelectionText() {
    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

let text = "";
window.addEventListener('keydown', function (ev) {
    if (ev.ctrlKey && ev.shiftKey && ev.altKey) {
        // ev.preventDefault();
        if (this.window.getSelection) {
            text = this.window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        for (let i = 0; i < data.length; i++) {
            if (text.trim() == data[i].Keyword) {
                this.window.open(data[i].Address);
                return;
            }
        }
        if(this.confirm('We couldnt find the selected keyword.\nPress OK if you want to try searching Solidity documentation!')){
            for(let i = 0; i < text.length; i++)
                if(text[i] == ' ')
                    text[i] = '+';
            this.window.open('https://solang.readthedocs.io/en/latest/search.html?q=' + text + '&check_keywords=yes&area=default');
        }
    }
}, false);


