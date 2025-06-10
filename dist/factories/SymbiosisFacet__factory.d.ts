import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
declare type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SymbiosisFacet__factory extends ContractFactory {
    constructor(...args: SymbiosisFacetConstructorParams);
    deploy(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SymbiosisFacet>;
    getDeployTransaction(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SymbiosisFacet;
    connect(signer: Signer): SymbiosisFacet__factory;
    static readonly bytecode = "0x60c0604052348015600e575f5ffd5b50604051611f47380380611f47833981016040819052602b916057565b6001600160a01b039182166080521660a052608a565b6001600160a01b03811681146054575f5ffd5b50565b5f5f604083850312156067575f5ffd5b82516070816041565b6020840151909250607f816041565b809150509250929050565b60805160a051611e9c6100ab5f395f6105e601525f6106110152611e9c5ff3fe608060405260043610610028575f3560e01c80636e0671611461002c578063b70fb9a514610041575b5f5ffd5b61003f61003a3660046117cd565b610054565b005b61003f61004f366004611893565b610242565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476118f8565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101418160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610178576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610206895f01518a60c001518a8a33610462565b60c08a015261021589876105a5565b5047905081811115610235576102355f8461023085856118f8565b6108a7565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102cd34476118f8565b9050846102f28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610329576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610366576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103a3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103e1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043188608001518960c001516108dc565b61043b88886105a5565b504791505081811115610457576104575f8461023085856118f8565b50505f909155505050565b5f8280820361049d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ab6001856118f8565b8181106104ba576104ba611930565b90506020028101906104cc919061195d565b6104dd906080810190606001611999565b90505f6104e982610990565b905073ffffffffffffffffffffffffffffffffffffffff82166105135761051034826118f8565b90505b5f61051e88886109da565b905061052a8888610ae4565b6105378a89898985610b50565b5f8261054285610990565b61054c91906118f8565b905089811015610597576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f6105c8836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f81156105dc575060c083015161060f565b61060f84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610e88565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087805f019061066791906119b9565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020908101906106af908901896119b9565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016106f560a0890189611a21565b808060200260200160405190810160405280939291908181526020018383602002808284375f9201919091525050509082525060200161073b6080890160608a01611999565b73ffffffffffffffffffffffffffffffffffffffff16815260200161076660a0890160808a01611999565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107a69190611999565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107ce60e08901896119b9565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261083c9190600401611b21565b5f604051808303818588803b158015610853575f5ffd5b505af1158015610865573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108999190611c87565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166108d1576108cc8282610eb4565b505050565b6108cc838383610f21565b805f03610915576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661096e578034101561096a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61096a73ffffffffffffffffffffffffffffffffffffffff8316333084610f8f565b5f73ffffffffffffffffffffffffffffffffffffffff8216156109d2576109cd73ffffffffffffffffffffffffffffffffffffffff831630610fe7565b6109d4565b475b92915050565b6060815f8167ffffffffffffffff8111156109f7576109f7611597565b604051908082528060200260200182016040528015610a20578160200160208202803683370190505b5090505f805b83811015610ad957868682818110610a4057610a40611930565b9050602002810190610a52919061195d565b610a63906080810190606001611999565b9150610a6e82610990565b838281518110610a8057610a80611930565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ad15734838281518110610ab957610ab9611930565b60200260200101818151610acd91906118f8565b9052505b600101610a26565b509095945050505050565b5f5b818110156108cc5736838383818110610b0157610b01611930565b9050602002810190610b13919061195d565b9050610b2560e0820160c08301611d9a565b15610b4757610b47610b3d6060830160408401611999565b82608001356108dc565b50600101610ae6565b8383838382805f5b81811015610cf957368b8b83818110610b7357610b73611930565b9050602002810190610b85919061195d565b9050610bb4610b9a6060830160408401611999565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c165750610c16610bcd6040830160208401611999565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c2d5750610c2d610bcd6020830183611999565b8015610cb05750610cb0610c4460a08301836119b9565b610c52916004915f91611db3565b610c5b91611dda565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ce6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cf08d8261101a565b50600101610b58565b505080600114610e12575f8585610d116001856118f8565b818110610d2057610d20611930565b9050602002810190610d32919061195d565b610d43906080810190606001611999565b90505f805b610d536001856118f8565b811015610e0e575f888883818110610d6d57610d6d611930565b9050602002810190610d7f919061195d565b610d90906080810190606001611999565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e0557858281518110610dd757610dd7611930565b6020026020010151610de882610990565b610df291906118f8565b92508215610e0557610e058188856108a7565b50600101610d48565b5050505b5f5b81811015610e7b575f868683818110610e2f57610e2f611930565b9050602002810190610e41919061195d565b610e52906060810190604001611999565b90505f610e5e82610990565b90508015610e7157610e718287836108a7565b5050600101610e14565b5050505050505050505050565b6108cc8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112ec565b73ffffffffffffffffffffffffffffffffffffffff8216610f01576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61096a73ffffffffffffffffffffffffffffffffffffffff831682611419565b73ffffffffffffffffffffffffffffffffffffffff8216610f6e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108cc73ffffffffffffffffffffffffffffffffffffffff84168383611432565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610fda57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61102f61102a6020830183611999565b61147b565b611065576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036110a4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6110b8610b9a6060850160408601611999565b6110c2575f6110c8565b82608001355b90505f6110e36110de6060860160408701611999565b610990565b90505f6110f96110de6080870160608801611999565b9050825f0361112f5761112f6111156060870160408801611999565b6111256040880160208901611999565b8760800135610e88565b846080013582101561117a576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161058e565b5f806111896020880188611999565b73ffffffffffffffffffffffffffffffffffffffff16856111ad60a08a018a6119b9565b6040516111bb929190611e40565b5f6040518083038185875af1925050503d805f81146111f5576040519150601f19603f3d011682016040523d82523d5f602084013e6111fa565b606091505b50915091508161120d5761120d8161150f565b5f6112216110de60808a0160608b01611999565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961125260208b018b611999565b61126260608c0160408d01611999565b61127260808d0160608e01611999565b8c60800135898711611284578661128e565b61128e8a886118f8565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114135773ffffffffffffffffffffffffffffffffffffffff8316611355576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113c8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113ec9190611e4f565b10156114135761141373ffffffffffffffffffffffffffffffffffffffff85168483611519565b50505050565b5f385f3884865af161096a5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611472576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161150657506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611472575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661147257633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115e8576115e8611597565b60405290565b5f82601f8301126115fd575f5ffd5b813567ffffffffffffffff81111561161757611617611597565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561166457611664611597565b60405281815283820160200185101561167b575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116ba575f5ffd5b919050565b803580151581146116ba575f5ffd5b5f61014082840312156116df575f5ffd5b6116e76115c4565b823581529050602082013567ffffffffffffffff811115611706575f5ffd5b611712848285016115ee565b602083015250604082013567ffffffffffffffff811115611731575f5ffd5b61173d848285016115ee565b60408301525061174f60608301611697565b606082015261176060808301611697565b608082015261177160a08301611697565b60a082015260c0828101359082015260e0808301359082015261179761010083016116bf565b6101008201526117aa61012083016116bf565b61012082015292915050565b5f61010082840312156117c7575f5ffd5b50919050565b5f5f5f5f606085870312156117e0575f5ffd5b843567ffffffffffffffff8111156117f6575f5ffd5b611802878288016116ce565b945050602085013567ffffffffffffffff81111561181e575f5ffd5b8501601f8101871361182e575f5ffd5b803567ffffffffffffffff811115611844575f5ffd5b8760208260051b8401011115611858575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561187b575f5ffd5b611887878288016117b6565b91505092959194509250565b5f5f604083850312156118a4575f5ffd5b823567ffffffffffffffff8111156118ba575f5ffd5b6118c6858286016116ce565b925050602083013567ffffffffffffffff8111156118e2575f5ffd5b6118ee858286016117b6565b9150509250929050565b818103818111156109d4577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261198f575f5ffd5b9190910192915050565b5f602082840312156119a9575f5ffd5b6119b282611697565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126119ec575f5ffd5b83018035915067ffffffffffffffff821115611a06575f5ffd5b602001915036819003821315611a1a575f5ffd5b9250929050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a54575f5ffd5b83018035915067ffffffffffffffff821115611a6e575f5ffd5b6020019150600581901b3603821315611a1a575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f8151808452602084019350602083015f5b82811015611b1757815173ffffffffffffffffffffffffffffffffffffffff16865260209586019590910190600101611ae3565b5093949350505050565b602081525f82516101206020840152611b3e610140840182611a85565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016040850152611b798282611a85565b91505060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611bb58282611ad1565b9150506060840151611bdf608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015160c084015260c0840151611c1f60e085018215159052565b5060e084015173ffffffffffffffffffffffffffffffffffffffff8116610100850152506101008401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610120850152611c7e8282611a85565b95945050505050565b60208152815160208201525f60208301516101406040840152611cae610160840182611a85565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611ce98282611a85565b9150506060840151611d13608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d8261012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611daa575f5ffd5b6119b2826116bf565b5f5f85851115611dc1575f5ffd5b83861115611dcd575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611e39577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611e5f575f5ffd5b505191905056fea2646970667358221220b359f6c311af197c5cc137974518de531091fbd2da120a1dcaba289aefcd2a7464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbiosisMetaRouter";
            readonly type: "address";
            readonly internalType: "contract ISymbiosisMetaRouter";
        }, {
            readonly name: "_symbiosisGateway";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
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
    }];
    static createInterface(): SymbiosisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymbiosisFacet;
}
export {};
