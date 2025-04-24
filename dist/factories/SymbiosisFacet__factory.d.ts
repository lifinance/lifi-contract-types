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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001f7838038062001f78833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611eae620000ca60003960006105f8015260006106230152611eae6000f3fe6080604052600436106100295760003560e01c80636e0671611461002e578063b70fb9a514610043575b600080fd5b61004161003c366004611807565b610056565b005b6100416100513660046118c6565b610249565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761192a565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020b89600001518a60c001518a8a3361046d565b60c08a015261021a89876105b5565b504790508181111561023b5761023b600084610236858561192a565b6108c2565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d5344761192a565b9050846102fa8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610331576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361036f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103ac576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103ea576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a88608001518960c001516108f7565b61044488886105b5565b50479150508181111561046157610461600084610236858561192a565b50506000909155505050565b6000828082036104a9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104b860018561192a565b8181106104c7576104c7611964565b90506020028101906104d99190611993565b6104ea9060808101906060016119d1565b905060006104f7826109ac565b905073ffffffffffffffffffffffffffffffffffffffff82166105215761051e348261192a565b90505b600061052d88886109f7565b90506105398888610b03565b6105468a89898985610b70565b600082610552856109ac565b61055c919061192a565b9050898110156105a7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60006105d9836080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050600081156105ee575060c0830151610621565b61062184608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f22565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087806000019061067a91906119f3565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020908101906106c3908901896119f3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060200161070a60a0890189611a5f565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506020016107516080890160608a016119d1565b73ffffffffffffffffffffffffffffffffffffffff16815260200161077c60a0890160808a016119d1565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107bc91906119d1565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107e460e08901896119f3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526108539190600401611b7c565b6000604051808303818588803b15801561086c57600080fd5b505af1158015610880573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108b49190611caf565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166108ec576108e78282610f4e565b505050565b6108e7838383610fbb565b80600003610931576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661098a5780341015610986576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61098673ffffffffffffffffffffffffffffffffffffffff8316333084611029565b600073ffffffffffffffffffffffffffffffffffffffff8216156109ef576109ea73ffffffffffffffffffffffffffffffffffffffff831630611086565b6109f1565b475b92915050565b60608160008167ffffffffffffffff811115610a1557610a156115cc565b604051908082528060200260200182016040528015610a3e578160200160208202803683370190505b5090506000805b83811015610af857868682818110610a5f57610a5f611964565b9050602002810190610a719190611993565b610a829060808101906060016119d1565b9150610a8d826109ac565b838281518110610a9f57610a9f611964565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610af05734838281518110610ad857610ad8611964565b60200260200101818151610aec919061192a565b9052505b600101610a45565b509095945050505050565b60005b818110156108e75736838383818110610b2157610b21611964565b9050602002810190610b339190611993565b9050610b4560e0820160c08301611dc2565b15610b6757610b67610b5d60608301604084016119d1565b82608001356108f7565b50600101610b06565b838383838260018114610e3d5760008585610b8c60018561192a565b818110610b9b57610b9b611964565b9050602002810190610bad9190611993565b610bbe9060808101906060016119d1565b9050600089815b81811015610d6957368d8d83818110610be057610be0611964565b9050602002810190610bf29190611993565b9050610c21610c0760608301604084016119d1565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c845750610c84610c3a60408301602084016119d1565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c9b5750610c9b610c3a60208301836119d1565b8015610d205750610d20610cb260a08301836119f3565b610cc191600491600091611ddd565b610cca91611e07565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d56576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d608f826110bb565b50600101610bc5565b505060005b610d7960018561192a565b811015610e35576000888883818110610d9457610d94611964565b9050602002810190610da69190611993565b610db79060808101906060016119d1565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e2c57858281518110610dfe57610dfe611964565b6020026020010151610e0f826109ac565b610e19919061192a565b92508215610e2c57610e2c8188856108c2565b50600101610d6e565b505050610f16565b8760005b81811015610f1357368b8b83818110610e5c57610e5c611964565b9050602002810190610e6e9190611993565b9050610e83610c0760608301604084016119d1565b80610e9c5750610e9c610c3a60408301602084016119d1565b8015610eb35750610eb3610c3a60208301836119d1565b8015610eca5750610eca610cb260a08301836119f3565b610f00576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f0a8d826110bb565b50600101610e41565b50505b50505050505050505050565b6108e78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113ba565b73ffffffffffffffffffffffffffffffffffffffff8216610f9b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098673ffffffffffffffffffffffffffffffffffffffff8316826114cd565b73ffffffffffffffffffffffffffffffffffffffff8216611008576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108e773ffffffffffffffffffffffffffffffffffffffff841683836114e9565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661107857637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6110f26110cb60208301836119d1565b3f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141590565b611128576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611168576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061117d610c0760608501604086016119d1565b61118857600061118e565b82608001355b905060006111aa6111a560608601604087016119d1565b6109ac565b905060006111c16111a560808701606088016119d1565b9050826000036111f8576111f86111de60608701604088016119d1565b6111ee60408801602089016119d1565b8760800135610f22565b8460800135821015611243576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161059e565b60008061125360208801886119d1565b73ffffffffffffffffffffffffffffffffffffffff168561127760a08a018a6119f3565b604051611285929190611e4f565b60006040518083038185875af1925050503d80600081146112c2576040519150601f19603f3d011682016040523d82523d6000602084013e6112c7565b606091505b5091509150816112da576112da81611538565b60006112ef6111a560808a0160608b016119d1565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961132060208b018b6119d1565b61133060608c0160408d016119d1565b61134060808d0160608e016119d1565b8c60800135898711611352578661135c565b61135c8a8861192a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611407576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561147c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a09190611e5f565b10156114c7576114c773ffffffffffffffffffffffffffffffffffffffff85168483611542565b50505050565b60003860003884865af16109865763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661152e576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661152e5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661152e57633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561161f5761161f6115cc565b60405290565b600082601f83011261163657600080fd5b813567ffffffffffffffff80821115611651576116516115cc565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611697576116976115cc565b816040528381528660208588010111156116b057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116f457600080fd5b919050565b803580151581146116f457600080fd5b6000610140828403121561171c57600080fd5b6117246115fb565b905081358152602082013567ffffffffffffffff8082111561174557600080fd5b61175185838601611625565b6020840152604084013591508082111561176a57600080fd5b5061177784828501611625565b604083015250611789606083016116d0565b606082015261179a608083016116d0565b60808201526117ab60a083016116d0565b60a082015260c082013560c082015260e082013560e08201526101006117d28184016116f9565b908201526101206117e48382016116f9565b9082015292915050565b6000610100828403121561180157600080fd5b50919050565b6000806000806060858703121561181d57600080fd5b843567ffffffffffffffff8082111561183557600080fd5b61184188838901611709565b9550602087013591508082111561185757600080fd5b818701915087601f83011261186b57600080fd5b81358181111561187a57600080fd5b8860208260051b850101111561188f57600080fd5b6020830195508094505060408701359150808211156118ad57600080fd5b506118ba878288016117ee565b91505092959194509250565b600080604083850312156118d957600080fd5b823567ffffffffffffffff808211156118f157600080fd5b6118fd86838701611709565b9350602085013591508082111561191357600080fd5b50611920858286016117ee565b9150509250929050565b818103818111156109f1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126119c757600080fd5b9190910192915050565b6000602082840312156119e357600080fd5b6119ec826116d0565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a2857600080fd5b83018035915067ffffffffffffffff821115611a4357600080fd5b602001915036819003821315611a5857600080fd5b9250929050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a9457600080fd5b83018035915067ffffffffffffffff821115611aaf57600080fd5b6020019150600581901b3603821315611a5857600080fd5b6000815180845260005b81811015611aed57602081850181015186830182015201611ad1565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600081518084526020808501945080840160005b83811015611b7157815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611b3f565b509495945050505050565b6020815260008251610120806020850152611b9b610140850183611ac7565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe080868503016040870152611bd78483611ac7565b93506040870151915080868503016060870152611bf48483611b2b565b935060608701519150611c1f608087018373ffffffffffffffffffffffffffffffffffffffff169052565b608087015173ffffffffffffffffffffffffffffffffffffffff811660a0880152915060a087015160c087015260c08701519150611c6160e087018315159052565b60e08701519150610100611c8c8188018473ffffffffffffffffffffffffffffffffffffffff169052565b870151868503909101838701529050611ca58382611ac7565b9695505050505050565b602081528151602082015260006020830151610140806040850152611cd8610160850183611ac7565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611d138382611ac7565b9250506060850151611d3d608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611db08187018315159052565b90950151151593019290925250919050565b600060208284031215611dd457600080fd5b6119ec826116f9565b60008085851115611ded57600080fd5b83861115611dfa57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611e475780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611e7157600080fd5b505191905056fea2646970667358221220ec68160591305d7c560dbdf71ee518fe2559b8ed0ff32bfc53aa7a5585a3a19b64736f6c63430008110033";
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
