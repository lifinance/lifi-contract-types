import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";
declare type CBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CBridgeFacet__factory extends ContractFactory {
    constructor(...args: CBridgeFacetConstructorParams);
    deploy(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CBridgeFacet>;
    getDeployTransaction(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeFacet;
    connect(signer: Signer): CBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051620021403803806200214083398101604081905261003191610042565b6001600160a01b0316608052610072565b60006020828403121561005457600080fd5b81516001600160a01b038116811461006b57600080fd5b9392505050565b60805161209e620000a26000396000818160e00152818161095101528181610a500152610a7b015261209e6000f3fe6080604052600436106100345760003560e01c80630d19e51914610039578063482c6a851461005b578063ae0b91e51461006e575b600080fd5b34801561004557600080fd5b506100596100543660046118f7565b610081565b005b610059610069366004611bb9565b610298565b61005961007c366004611c65565b6104ca565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c7576100c76106ee565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461014c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff168686604051610175929190611cb4565b6000604051808303816000865af19150503d80600081146101b2576040519150601f19603f3d011682016040523d82523d6000602084013e6101b7565b606091505b505080915050806101f4576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610218578361021a565b335b905061022785828561078e565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161028691815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610313576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103243447611cc4565b905086806101000151610363576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103a1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103c48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103fb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610439576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610476576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048b8a600001518b60c001518b8b336107c4565b60c08b015261049a8a8861090c565b5047915050818111156104bc576104bc6000846104b78585611cc4565b61078e565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610545576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105563447611cc4565b90508480610100015115610596576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105f78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561062e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361066c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106bb88608001518960c00151610bd6565b6106c5888861090c565b5047915050818111156106e2576106e26000846104b78585611cc4565b50506000909155505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461078b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff8316156107ba576107b5838383610c8b565b505050565b6107b58282610cf9565b600082808203610800576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080f600185611cc4565b81811061081e5761081e611cfe565b90506020028101906108309190611d2d565b610841906080810190606001611d6b565b9050600061084e82610d66565b905073ffffffffffffffffffffffffffffffffffffffff8216610878576108753482611cc4565b90505b60006108848888610db1565b90506108908888610ebd565b61089d8a89898985610f2a565b6000826108a985610d66565b6108b39190611cc4565b9050898110156108fe576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a465760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc3929091829061098c6040880160208901611d8f565b6109996020890189611db9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4016000604051808303818588803b158015610a2857600080fd5b505af1158015610a3c573d6000803e3d6000fd5b5050505050610b9b565b610a7982608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516112dc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610adc9190611d8f565b610ae96020890189611db9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610b8257600080fd5b505af1158015610b96573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610bca9190611e43565b60405180910390a15050565b80600003610c10576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c695780341015610c65576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c6573ffffffffffffffffffffffffffffffffffffffff8316333084611308565b73ffffffffffffffffffffffffffffffffffffffff8216610cd8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107b573ffffffffffffffffffffffffffffffffffffffff84168383611365565b73ffffffffffffffffffffffffffffffffffffffff8216610d46576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c6573ffffffffffffffffffffffffffffffffffffffff8316826113b4565b600073ffffffffffffffffffffffffffffffffffffffff821615610da957610da473ffffffffffffffffffffffffffffffffffffffff8316306113d0565b610dab565b475b92915050565b60608160008167ffffffffffffffff811115610dcf57610dcf6119a8565b604051908082528060200260200182016040528015610df8578160200160208202803683370190505b5090506000805b83811015610eb257868682818110610e1957610e19611cfe565b9050602002810190610e2b9190611d2d565b610e3c906080810190606001611d6b565b9150610e4782610d66565b838281518110610e5957610e59611cfe565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610eaa5734838281518110610e9257610e92611cfe565b60200260200101818151610ea69190611cc4565b9052505b600101610dff565b509095945050505050565b60005b818110156107b55736838383818110610edb57610edb611cfe565b9050602002810190610eed9190611d2d565b9050610eff60e0820160c08301611f56565b15610f2157610f21610f176060830160408401611d6b565b8260800135610bd6565b50600101610ec0565b8383838382600181146111f75760008585610f46600185611cc4565b818110610f5557610f55611cfe565b9050602002810190610f679190611d2d565b610f78906080810190606001611d6b565b9050600089815b8181101561112357368d8d83818110610f9a57610f9a611cfe565b9050602002810190610fac9190611d2d565b9050610fdb610fc16060830160408401611d6b565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061103e575061103e610ff46040830160208401611d6b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156110555750611055610ff46020830183611d6b565b80156110da57506110da61106c60a0830183611f71565b61107b91600491600091611fdd565b61108491612007565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611110576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61111a8f82611405565b50600101610f7f565b505060005b611133600185611cc4565b8110156111ef57600088888381811061114e5761114e611cfe565b90506020028101906111609190611d2d565b611171906080810190606001611d6b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111e6578582815181106111b8576111b8611cfe565b60200260200101516111c982610d66565b6111d39190611cc4565b925082156111e6576111e681888561078e565b50600101611128565b5050506112d0565b8760005b818110156112cd57368b8b8381811061121657611216611cfe565b90506020028101906112289190611d2d565b905061123d610fc16060830160408401611d6b565b806112565750611256610ff46040830160208401611d6b565b801561126d575061126d610ff46020830183611d6b565b8015611284575061128461106c60a0830183611f71565b6112ba576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112c48d82611405565b506001016111fb565b50505b50505050505050505050565b6107b58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116e2565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661135757637939f4246000526004601cfd5b600060605260405250505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166113aa576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610c655763b12d13eb6000526004601cfd5b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61141a6114156020830183611d6b565b6117f5565b611450576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611490576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006114a5610fc16060850160408601611d6b565b6114b05760006114b6565b82608001355b905060006114d26114cd6060860160408701611d6b565b610d66565b905060006114e96114cd6080870160608801611d6b565b905082600003611520576115206115066060870160408801611d6b565b6115166040880160208901611d6b565b87608001356112dc565b846080013582101561156b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108f5565b60008061157b6020880188611d6b565b73ffffffffffffffffffffffffffffffffffffffff168561159f60a08a018a611f71565b6040516115ad929190611cb4565b60006040518083038185875af1925050503d80600081146115ea576040519150601f19603f3d011682016040523d82523d6000602084013e6115ef565b606091505b5091509150816116025761160281611831565b60006116176114cd60808a0160608b01611d6b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961164860208b018b611d6b565b61165860608c0160408d01611d6b565b61166860808d0160608e01611d6b565b8c6080013589871161167a5786611684565b6116848a88611cc4565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661172f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c8919061204f565b10156117ef576117ef73ffffffffffffffffffffffffffffffffffffffff8516848361183b565b50505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081158015906118295750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166113aa5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166113aa57633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8116811461078b57600080fd5b80356118f2816118c5565b919050565b60008060008060008060a0878903121561191057600080fd5b863561191b816118c5565b9550602087013567ffffffffffffffff8082111561193857600080fd5b818901915089601f83011261194c57600080fd5b81358181111561195b57600080fd5b8a602082850101111561196d57600080fd5b6020830197508096505050506040870135611987816118c5565b9250611995606088016118e7565b9150608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156119fb576119fb6119a8565b60405290565b600082601f830112611a1257600080fd5b813567ffffffffffffffff80821115611a2d57611a2d6119a8565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611a7357611a736119a8565b81604052838152866020858801011115611a8c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803580151581146118f257600080fd5b60006101408284031215611acf57600080fd5b611ad76119d7565b905081358152602082013567ffffffffffffffff80821115611af857600080fd5b611b0485838601611a01565b60208401526040840135915080821115611b1d57600080fd5b50611b2a84828501611a01565b604083015250611b3c606083016118e7565b6060820152611b4d608083016118e7565b6080820152611b5e60a083016118e7565b60a082015260c082013560c082015260e082013560e0820152610100611b85818401611aac565b90820152610120611b97838201611aac565b9082015292915050565b600060408284031215611bb357600080fd5b50919050565b60008060008060808587031215611bcf57600080fd5b843567ffffffffffffffff80821115611be757600080fd5b611bf388838901611abc565b95506020870135915080821115611c0957600080fd5b818701915087601f830112611c1d57600080fd5b813581811115611c2c57600080fd5b8860208260051b8501011115611c4157600080fd5b602083019550809450505050611c5a8660408701611ba1565b905092959194509250565b60008060608385031215611c7857600080fd5b823567ffffffffffffffff811115611c8f57600080fd5b611c9b85828601611abc565b925050611cab8460208501611ba1565b90509250929050565b8183823760009101908152919050565b81810381811115610dab577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d6157600080fd5b9190910192915050565b600060208284031215611d7d57600080fd5b8135611d88816118c5565b9392505050565b600060208284031215611da157600080fd5b813567ffffffffffffffff81168114611d8857600080fd5b600060208284031215611dcb57600080fd5b813563ffffffff81168114611d8857600080fd5b6000815180845260005b81811015611e0557602081850181015186830182015201611de9565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611e6c610160850183611ddf565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611ea78382611ddf565b9250506060850151611ed1608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611f448187018315159052565b90950151151593019290925250919050565b600060208284031215611f6857600080fd5b611d8882611aac565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fa657600080fd5b83018035915067ffffffffffffffff821115611fc157600080fd5b602001915036819003821315611fd657600080fd5b9250929050565b60008085851115611fed57600080fd5b83861115611ffa57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156120475780818660040360031b1b83161692505b505092915050565b60006020828403121561206157600080fd5b505191905056fea26469706673582212206dca9a911bdd78e3451d0b4320826c26fcf008ed62b0b906ed46ca1ced27176f64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_cBridge";
            readonly type: "address";
            readonly internalType: "contract ICBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_cBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_cBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "triggerRefund";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "CBridgeRefund";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): CBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacet;
}
export {};
