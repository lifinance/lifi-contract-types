import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c0604052348015600e575f5ffd5b50604051611ef2380380611ef2833981016040819052602b916057565b6001600160a01b039182166080521660a052608a565b6001600160a01b03811681146054575f5ffd5b50565b5f5f604083850312156067575f5ffd5b82516070816041565b6020840151909250607f816041565b809150509250929050565b60805160a051611e476100ab5f395f6105e501525f6106100152611e475ff3fe608060405260043610610028575f3560e01c80636e0671611461002c578063b70fb9a514610041575b5f5ffd5b61003f61003a366004611778565b610054565b005b61003f61004f36600461183e565b610242565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476118a3565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101418160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610178576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610206895f01518a60c001518a8a33610462565b60c08a015261021589876105a4565b5047905081811115610235576102355f8461023085856118a3565b6108a6565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102cd34476118a3565b9050846102f28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610329576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610366576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103a3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103e1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043188608001518960c001516108db565b61043b88886105a4565b504791505081811115610457576104575f8461023085856118a3565b50505f909155505050565b5f8280820361049d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ab6001856118a3565b8181106104ba576104ba6118db565b90506020028101906104cc9190611908565b6104dd906080810190606001611944565b90505f6104e98261098f565b905073ffffffffffffffffffffffffffffffffffffffff82166105135761051034826118a3565b90505b5f61051e88886109d9565b905061052a8888610ae3565b6105378a89898985610b4f565b5f826105428561098f565b61054c91906118a3565b905089811015610596576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f6105c7836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f81156105db575060c083015161060e565b61060e84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610d0f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087805f01906106669190611964565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020908101906106ae90890189611964565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016106f460a08901896119cc565b808060200260200160405190810160405280939291908181526020018383602002808284375f9201919091525050509082525060200161073a6080890160608a01611944565b73ffffffffffffffffffffffffffffffffffffffff16815260200161076560a0890160808a01611944565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107a59190611944565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107cd60e0890189611964565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261083b9190600401611acc565b5f604051808303818588803b158015610852575f5ffd5b505af1158015610864573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108989190611c32565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166108d0576108cb8282610d3b565b505050565b6108cb838383610da8565b805f03610914576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661096d5780341015610969576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61096973ffffffffffffffffffffffffffffffffffffffff8316333084610e16565b5f73ffffffffffffffffffffffffffffffffffffffff8216156109d1576109cc73ffffffffffffffffffffffffffffffffffffffff831630610e6e565b6109d3565b475b92915050565b6060815f8167ffffffffffffffff8111156109f6576109f6611542565b604051908082528060200260200182016040528015610a1f578160200160208202803683370190505b5090505f5f5b83811015610ad857868682818110610a3f57610a3f6118db565b9050602002810190610a519190611908565b610a62906080810190606001611944565b9150610a6d8261098f565b838281518110610a7f57610a7f6118db565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ad05734838281518110610ab857610ab86118db565b60200260200101818151610acc91906118a3565b9052505b600101610a25565b509095945050505050565b5f5b818110156108cb5736838383818110610b0057610b006118db565b9050602002810190610b129190611908565b9050610b2460e0820160c08301611d45565b15610b4657610b46610b3c6060830160408401611944565b82608001356108db565b50600101610ae5565b83838383825f5b81811015610cf557368a8a83818110610b7157610b716118db565b9050602002810190610b839190611908565b9050610bb2610b986060830160408401611944565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c135750610c13610bcb6040830160208401611944565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b8015610c2a5750610c2a610bcb6020830183611944565b8015610cac5750610cac610c4160a0830183611964565b610c4f916004915f91611d5e565b610c5891611d85565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b610ce2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cec8c82610ea1565b50600101610b56565b5050610d04848484845f611114565b505050505050505050565b6108cb8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61132b565b73ffffffffffffffffffffffffffffffffffffffff8216610d88576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61096973ffffffffffffffffffffffffffffffffffffffff831682611458565b73ffffffffffffffffffffffffffffffffffffffff8216610df5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108cb73ffffffffffffffffffffffffffffffffffffffff84168383611471565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e6157637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610eb9610eb16020830183611944565b6017903b1190565b610eef576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610f2e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610f42610b986060850160408601611944565b610f4c575f610f52565b82608001355b90505f610f6d610f686080860160608701611944565b61098f565b9050815f03610fa357610fa3610f896060860160408701611944565b610f996040870160208801611944565b8660800135610d0f565b5f80610fb26020870187611944565b73ffffffffffffffffffffffffffffffffffffffff1684610fd660a0890189611964565b604051610fe4929190611deb565b5f6040518083038185875af1925050503d805f811461101e576040519150601f19603f3d011682016040523d82523d5f602084013e611023565b606091505b50915091508161103657611036816114ba565b5f61104a610f686080890160608a01611944565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861107b60208a018a611944565b61108b60608b0160408c01611944565b61109b60808c0160608d01611944565b8b608001358987116110ad57866110b7565b6110b78a886118a3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826111236001826118a3565b818110611132576111326118db565b90506020028101906111449190611908565b611155906080810190606001611944565b90505f5f5f5f5f5f5f5b8881101561131b5761117260018a6118a3565b81108015611181575088600114155b1561125c578d8d82818110611198576111986118db565b90506020028101906111aa9190611908565b6111bb906080810190606001611944565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461125c578a8181518110611202576112026118db565b60200260200101516112138761098f565b61121d91906118a3565b965073ffffffffffffffffffffffffffffffffffffffff861615611241575f611243565b895b93508387111561125c5761125c868d610230878b6118a3565b8d8d8281811061126e5761126e6118db565b90506020028101906112809190611908565b611291906060810190604001611944565b945061129c8561098f565b925073ffffffffffffffffffffffffffffffffffffffff8516156112c0575f6112c2565b895b915081831180156112ff57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561131357611313858d61023085876118a3565b60010161115f565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114525773ffffffffffffffffffffffffffffffffffffffff8316611394576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611407573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061142b9190611dfa565b10156114525761145273ffffffffffffffffffffffffffffffffffffffff851684836114c4565b50505050565b5f385f3884865af16109695763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166114b1576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166114b1575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166114b157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561159357611593611542565b60405290565b5f82601f8301126115a8575f5ffd5b813567ffffffffffffffff8111156115c2576115c2611542565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561160f5761160f611542565b604052818152838201602001851015611626575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611665575f5ffd5b919050565b80358015158114611665575f5ffd5b5f610140828403121561168a575f5ffd5b61169261156f565b823581529050602082013567ffffffffffffffff8111156116b1575f5ffd5b6116bd84828501611599565b602083015250604082013567ffffffffffffffff8111156116dc575f5ffd5b6116e884828501611599565b6040830152506116fa60608301611642565b606082015261170b60808301611642565b608082015261171c60a08301611642565b60a082015260c0828101359082015260e08083013590820152611742610100830161166a565b610100820152611755610120830161166a565b61012082015292915050565b5f6101008284031215611772575f5ffd5b50919050565b5f5f5f5f6060858703121561178b575f5ffd5b843567ffffffffffffffff8111156117a1575f5ffd5b6117ad87828801611679565b945050602085013567ffffffffffffffff8111156117c9575f5ffd5b8501601f810187136117d9575f5ffd5b803567ffffffffffffffff8111156117ef575f5ffd5b8760208260051b8401011115611803575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611826575f5ffd5b61183287828801611761565b91505092959194509250565b5f5f6040838503121561184f575f5ffd5b823567ffffffffffffffff811115611865575f5ffd5b61187185828601611679565b925050602083013567ffffffffffffffff81111561188d575f5ffd5b61189985828601611761565b9150509250929050565b818103818111156109d3577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261193a575f5ffd5b9190910192915050565b5f60208284031215611954575f5ffd5b61195d82611642565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611997575f5ffd5b83018035915067ffffffffffffffff8211156119b1575f5ffd5b6020019150368190038213156119c5575f5ffd5b9250929050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126119ff575f5ffd5b83018035915067ffffffffffffffff821115611a19575f5ffd5b6020019150600581901b36038213156119c5575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f8151808452602084019350602083015f5b82811015611ac257815173ffffffffffffffffffffffffffffffffffffffff16865260209586019590910190600101611a8e565b5093949350505050565b602081525f82516101206020840152611ae9610140840182611a30565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016040850152611b248282611a30565b91505060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b608282611a7c565b9150506060840151611b8a608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015160c084015260c0840151611bca60e085018215159052565b5060e084015173ffffffffffffffffffffffffffffffffffffffff8116610100850152506101008401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610120850152611c298282611a30565b95945050505050565b60208152815160208201525f60208301516101406040840152611c59610160840182611a30565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611c948282611a30565b9150506060840151611cbe608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d2d61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611d55575f5ffd5b61195d8261166a565b5f5f85851115611d6c575f5ffd5b83861115611d78575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611de4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611e0a575f5ffd5b505191905056fea2646970667358221220a83bcfbb97db1f4710e1969a852d611b84f3e65c79f1ad033d1834dbe57a307464736f6c634300081d0033";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
