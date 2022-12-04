const data = [
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
    },
    {
        "Keyword": "bool",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#boolean-type"
    },
    {
        "Keyword": "uint",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "uint64",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "uint32",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "uint16",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "uint8",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "uintN",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "int",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "int64",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "int32",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "int16",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "int8",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "intN",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "int128",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "bytes32",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#fixed-length-byte-arrays"
    },
    {
        "Keyword": "bytes24",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#fixed-length-byte-arrays"
    },
    {
        "Keyword": "bytes8",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#fixed-length-byte-arrays"
    },
    {
        "Keyword": "bytes1",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#fixed-length-byte-arrays"
    },
    {
        "Keyword": "byte",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#fixed-length-byte-arrays"
    },
    {
        "Keyword": "byte1",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#fixed-length-byte-arrays"
    },
    {
        "Keyword": "address",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#address-and-address-payable-type"
    },
    {
        "Keyword": "address payable",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#address-and-address-payable-type"
    },
    {
        "Keyword": "payable",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#passing-value-and-gas-with-external-calls"
    },
    {
        "Keyword": "enum",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#enums"
    },
    {
        "Keyword": "struct",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#struct-type"
    },
    {
        "Keyword": ".length",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#fixed-length-arrays"
    },
    {
        "Keyword": "push",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#dynamic-length-arrays"
    },
    {
        "Keyword": "pop",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#dynamic-length-arrays"
    },
    {
        "Keyword": "string",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#string"
    },
    {
        "Keyword": "mapping",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#mappings"
    },
    {
        "Keyword": "internal",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#function-types"
    },
    {
        "Keyword": "external",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#function-types"
    },
    {
        "Keyword": "storage",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#storage-references"
    },
    {
        "Keyword": "type",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#user-defined-types"
    },
    {
        "Keyword": "this",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/expressions.html#this"
    },
    {
        "Keyword": "ether",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/expressions.html#ether-and-time-units"
    },
    {
        "Keyword": "wei",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/expressions.html#ether-and-time-units"
    },
    {
        "Keyword": "while",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#while-statement"
    },
    {
        "Keyword": "for",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#for-statements"
    },
    {
        "Keyword": "try",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#try-catch-statement"
    },
    {
        "Keyword": "catch",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#try-catch-statement"
    },
    {
        "Keyword": "constant",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/constants.html#constants"
    },
    {
        "Keyword": "using",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/using.html#binding-methods-to-types-with-using"
    },
    {
        "Keyword": "contract",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/contracts.html"
    },
    {
        "Keyword": "virtual",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/contracts.html#virtual-functions"
    },
    {
        "Keyword": "override",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/contracts.html#virtual-functions"
    },
    {
        "Keyword": "abstract contract",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/contracts.html#abstract-contracts"
    },
    {
        "Keyword": "interface",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/interface_libraries.html#interfaces"
    },
    {
        "Keyword": "library",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/interface_libraries.html#interfaces"
    },
    {
        "Keyword": "event",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/events.html"
    },
    {
        "Keyword": "function",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#functions"
    },
    {
        "Keyword": "public",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#functions"
    },
    {
        "Keyword": "private",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#functions"
    },
    {
        "Keyword": "returns",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#arguments-passing-and-return-values"
    },
    {
        "Keyword": "modifier",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#function-modifiers"
    },
    {
        "Keyword": "call",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#calling-an-external-function-using-call"
    },
    {
        "Keyword": "fallback",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#fallback-and-receive-function"
    },
    {
        "Keyword": "receive",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#fallback-and-receive-function"
    },
    {
        "Keyword": "balance",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/managing_values.html#checking-your-balance"
    },
    {
        "Keyword": "send",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/managing_values.html#sending-value-using-send-and-transfer"
    },
    {
        "Keyword": "transfer",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/managing_values.html#sending-value-using-send-and-transfer"
    },
    {
        "Keyword": "continue",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#for-statements"
    },
    {
        "Keyword": "break",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#for-statements"
    },
    {
        "Keyword": "if",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#if-statement"
    },
    {
        "Keyword": "else",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/statements.html#if-statement"
    },
    {
        "Keyword": "emit",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/events.html#events"
    },
    {
        "Keyword": "constructor",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/contracts.html#constructors-and-contract-instantiation"
    },
    {
        "Keyword": "return",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#arguments-passing-and-return-values"
    },
    {
        "Keyword": "view",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#state-mutability"
    },
    {
        "Keyword": "pure",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/functions.html#state-mutability"
    },
    {
        "Keyword": "uint256",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#integer-types"
    },
    {
        "Keyword": "memory",
        "Address": "https:\/\/solang.readthedocs.io\/en\/latest\/language\/types.html#dynamic-length-arrays"
    }
];


window.addEventListener('keydown', function (ev) {
    let text = "";
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
        if (this.confirm('We couldnt find the selected keyword.\nPress OK if you want to try searching Solidity documentation!')) {
            for (let i = 0; i < text.length; i++)
                if (text[i] == ' ')
                    text[i] = '+';
            this.window.open('https://solang.readthedocs.io/en/latest/search.html?q=' + text + '&check_keywords=yes&area=default');
        }
    }
}, false);
