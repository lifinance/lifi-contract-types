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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051620021b5380380620021b583398101604081905261003191610042565b6001600160a01b0316608052610072565b60006020828403121561005457600080fd5b81516001600160a01b038116811461006b57600080fd5b9392505050565b608051612113620000a26000396000818160e00152818161095001528181610a4f0152610a7a01526121136000f3fe6080604052600436106100345760003560e01c80630d19e51914610039578063482c6a851461005b578063ae0b91e51461006e575b600080fd5b34801561004557600080fd5b5061005961005436600461196c565b610081565b005b610059610069366004611c2e565b610298565b61005961007c366004611cda565b6104ca565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c7576100c76106ee565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461014c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff168686604051610175929190611d29565b6000604051808303816000865af19150503d80600081146101b2576040519150601f19603f3d011682016040523d82523d6000602084013e6101b7565b606091505b505080915050806101f4576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610218578361021a565b335b905061022785828561078e565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161028691815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610313576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103243447611d39565b905086806101000151610363576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103a1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103c48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103fb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610439576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610476576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048b8a600001518b60c001518b8b336107c3565b60c08b015261049a8a8861090b565b5047915050818111156104bc576104bc6000846104b78585611d39565b61078e565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610545576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105563447611d39565b90508480610100015115610596576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105f78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561062e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361066c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106bb88608001518960c00151610bd5565b6106c5888861090b565b5047915050818111156106e2576106e26000846104b78585611d39565b50506000909155505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461078b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff83166107b8576107b38282610c8a565b505050565b6107b3838383610cf7565b6000828082036107ff576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080e600185611d39565b81811061081d5761081d611d73565b905060200281019061082f9190611da2565b610840906080810190606001611de0565b9050600061084d82610d65565b905073ffffffffffffffffffffffffffffffffffffffff8216610877576108743482611d39565b90505b60006108838888610db0565b905061088f8888610ebc565b61089c8a89898985610f29565b6000826108a885610d65565b6108b29190611d39565b9050898110156108fd576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a455760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc3929091829061098b6040880160208901611e04565b6109986020890189611e2e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4016000604051808303818588803b158015610a2757600080fd5b505af1158015610a3b573d6000803e3d6000fd5b5050505050610b9a565b610a7882608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516112db565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610adb9190611e04565b610ae86020890189611e2e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610b8157600080fd5b505af1158015610b95573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610bc99190611eb8565b60405180910390a15050565b80600003610c0f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c685780341015610c64576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c6473ffffffffffffffffffffffffffffffffffffffff8316333084611307565b73ffffffffffffffffffffffffffffffffffffffff8216610cd7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c6473ffffffffffffffffffffffffffffffffffffffff831682611364565b73ffffffffffffffffffffffffffffffffffffffff8216610d44576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107b373ffffffffffffffffffffffffffffffffffffffff84168383611380565b600073ffffffffffffffffffffffffffffffffffffffff821615610da857610da373ffffffffffffffffffffffffffffffffffffffff8316306113cf565b610daa565b475b92915050565b60608160008167ffffffffffffffff811115610dce57610dce611a1d565b604051908082528060200260200182016040528015610df7578160200160208202803683370190505b5090506000805b83811015610eb157868682818110610e1857610e18611d73565b9050602002810190610e2a9190611da2565b610e3b906080810190606001611de0565b9150610e4682610d65565b838281518110610e5857610e58611d73565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ea95734838281518110610e9157610e91611d73565b60200260200101818151610ea59190611d39565b9052505b600101610dfe565b509095945050505050565b60005b818110156107b35736838383818110610eda57610eda611d73565b9050602002810190610eec9190611da2565b9050610efe60e0820160c08301611fcb565b15610f2057610f20610f166060830160408401611de0565b8260800135610bd5565b50600101610ebf565b8383838382600181146111f65760008585610f45600185611d39565b818110610f5457610f54611d73565b9050602002810190610f669190611da2565b610f77906080810190606001611de0565b9050600089815b8181101561112257368d8d83818110610f9957610f99611d73565b9050602002810190610fab9190611da2565b9050610fda610fc06060830160408401611de0565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061103d575061103d610ff36040830160208401611de0565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156110545750611054610ff36020830183611de0565b80156110d957506110d961106b60a0830183611fe6565b61107a91600491600091612052565b6110839161207c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61110f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111198f82611404565b50600101610f7e565b505060005b611132600185611d39565b8110156111ee57600088888381811061114d5761114d611d73565b905060200281019061115f9190611da2565b611170906080810190606001611de0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111e5578582815181106111b7576111b7611d73565b60200260200101516111c882610d65565b6111d29190611d39565b925082156111e5576111e581888561078e565b50600101611127565b5050506112cf565b8760005b818110156112cc57368b8b8381811061121557611215611d73565b90506020028101906112279190611da2565b905061123c610fc06060830160408401611de0565b806112555750611255610ff36040830160208401611de0565b801561126c575061126c610ff36020830183611de0565b8015611283575061128361106b60a0830183611fe6565b6112b9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112c38d82611404565b506001016111fa565b50505b50505050505050505050565b6107b38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116e1565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661135657637939f4246000526004601cfd5b600060605260405250505050565b60003860003884865af1610c645763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166113c5576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6114196114146020830183611de0565b611810565b61144f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361148f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006114a4610fc06060850160408601611de0565b6114af5760006114b5565b82608001355b905060006114d16114cc6060860160408701611de0565b610d65565b905060006114e86114cc6080870160608801611de0565b90508260000361151f5761151f6115056060870160408801611de0565b6115156040880160208901611de0565b87608001356112db565b846080013582101561156a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108f4565b60008061157a6020880188611de0565b73ffffffffffffffffffffffffffffffffffffffff168561159e60a08a018a611fe6565b6040516115ac929190611d29565b60006040518083038185875af1925050503d80600081146115e9576040519150601f19603f3d011682016040523d82523d6000602084013e6115ee565b606091505b50915091508161160157611601816118a6565b60006116166114cc60808a0160608b01611de0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961164760208b018b611de0565b61165760608c0160408d01611de0565b61166760808d0160608e01611de0565b8c608001358987116116795786611683565b6116838a88611d39565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561180a5773ffffffffffffffffffffffffffffffffffffffff831661174a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117e391906120c4565b101561180a5761180a73ffffffffffffffffffffffffffffffffffffffff851684836118b0565b50505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161189d57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166113c55760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166113c557633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8116811461078b57600080fd5b80356119678161193a565b919050565b60008060008060008060a0878903121561198557600080fd5b86356119908161193a565b9550602087013567ffffffffffffffff808211156119ad57600080fd5b818901915089601f8301126119c157600080fd5b8135818111156119d057600080fd5b8a60208285010111156119e257600080fd5b60208301975080965050505060408701356119fc8161193a565b9250611a0a6060880161195c565b9150608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611a7057611a70611a1d565b60405290565b600082601f830112611a8757600080fd5b813567ffffffffffffffff80821115611aa257611aa2611a1d565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ae857611ae8611a1d565b81604052838152866020858801011115611b0157600080fd5b836020870160208301376000602085830101528094505050505092915050565b8035801515811461196757600080fd5b60006101408284031215611b4457600080fd5b611b4c611a4c565b905081358152602082013567ffffffffffffffff80821115611b6d57600080fd5b611b7985838601611a76565b60208401526040840135915080821115611b9257600080fd5b50611b9f84828501611a76565b604083015250611bb16060830161195c565b6060820152611bc26080830161195c565b6080820152611bd360a0830161195c565b60a082015260c082013560c082015260e082013560e0820152610100611bfa818401611b21565b90820152610120611c0c838201611b21565b9082015292915050565b600060408284031215611c2857600080fd5b50919050565b60008060008060808587031215611c4457600080fd5b843567ffffffffffffffff80821115611c5c57600080fd5b611c6888838901611b31565b95506020870135915080821115611c7e57600080fd5b818701915087601f830112611c9257600080fd5b813581811115611ca157600080fd5b8860208260051b8501011115611cb657600080fd5b602083019550809450505050611ccf8660408701611c16565b905092959194509250565b60008060608385031215611ced57600080fd5b823567ffffffffffffffff811115611d0457600080fd5b611d1085828601611b31565b925050611d208460208501611c16565b90509250929050565b8183823760009101908152919050565b81810381811115610daa577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611dd657600080fd5b9190910192915050565b600060208284031215611df257600080fd5b8135611dfd8161193a565b9392505050565b600060208284031215611e1657600080fd5b813567ffffffffffffffff81168114611dfd57600080fd5b600060208284031215611e4057600080fd5b813563ffffffff81168114611dfd57600080fd5b6000815180845260005b81811015611e7a57602081850181015186830182015201611e5e565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611ee1610160850183611e54565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611f1c8382611e54565b9250506060850151611f46608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611fb98187018315159052565b90950151151593019290925250919050565b600060208284031215611fdd57600080fd5b611dfd82611b21565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261201b57600080fd5b83018035915067ffffffffffffffff82111561203657600080fd5b60200191503681900382131561204b57600080fd5b9250929050565b6000808585111561206257600080fd5b8386111561206f57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156120bc5780818660040360031b1b83161692505b505092915050565b6000602082840312156120d657600080fd5b505191905056fea2646970667358221220a216f7281be231cc929c863448c6f932689fab351960b8a494f769af3223d07164736f6c63430008110033";
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
