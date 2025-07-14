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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001f1138038062001f11833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611e47620000ca60003960006105f7015260006106220152611e476000f3fe6080604052600436106100295760003560e01c80636e0671611461002e578063b70fb9a514610043575b600080fd5b61004161003c3660046117a0565b610056565b005b61004161005136600461185f565b610249565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476118c3565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020b89600001518a60c001518a8a3361046d565b60c08a015261021a89876105b4565b504790508181111561023b5761023b60008461023685856118c3565b6108c1565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d534476118c3565b9050846102fa8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610331576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361036f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103ac576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103ea576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a88608001518960c001516108f6565b61044488886105b4565b5047915050818111156104615761046160008461023685856118c3565b50506000909155505050565b6000828082036104a9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104b86001856118c3565b8181106104c7576104c76118fd565b90506020028101906104d9919061192c565b6104ea90608081019060600161196a565b905060006104f7826109ab565b905073ffffffffffffffffffffffffffffffffffffffff82166105215761051e34826118c3565b90505b600061052d88886109f6565b90506105398888610b02565b6105468a89898985610b6f565b600082610552856109ab565b61055c91906118c3565b9050898110156105a6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60006105d8836080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050600081156105ed575060c0830151610620565b61062084608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f21565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b119882604051806101200160405280878060000190610679919061198c565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020908101906106c29089018961198c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060200161070960a08901896119f8565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506020016107506080890160608a0161196a565b73ffffffffffffffffffffffffffffffffffffffff16815260200161077b60a0890160808a0161196a565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107bb919061196a565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107e360e089018961198c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526108529190600401611b15565b6000604051808303818588803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108b39190611c48565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166108eb576108e68282610f4d565b505050565b6108e6838383610fba565b80600003610930576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109895780341015610985576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61098573ffffffffffffffffffffffffffffffffffffffff8316333084611028565b600073ffffffffffffffffffffffffffffffffffffffff8216156109ee576109e973ffffffffffffffffffffffffffffffffffffffff831630611085565b6109f0565b475b92915050565b60608160008167ffffffffffffffff811115610a1457610a14611565565b604051908082528060200260200182016040528015610a3d578160200160208202803683370190505b5090506000805b83811015610af757868682818110610a5e57610a5e6118fd565b9050602002810190610a70919061192c565b610a8190608081019060600161196a565b9150610a8c826109ab565b838281518110610a9e57610a9e6118fd565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610aef5734838281518110610ad757610ad76118fd565b60200260200101818151610aeb91906118c3565b9052505b600101610a44565b509095945050505050565b60005b818110156108e65736838383818110610b2057610b206118fd565b9050602002810190610b32919061192c565b9050610b4460e0820160c08301611d5b565b15610b6657610b66610b5c606083016040840161196a565b82608001356108f6565b50600101610b05565b838383838260018114610e3c5760008585610b8b6001856118c3565b818110610b9a57610b9a6118fd565b9050602002810190610bac919061192c565b610bbd90608081019060600161196a565b9050600089815b81811015610d6857368d8d83818110610bdf57610bdf6118fd565b9050602002810190610bf1919061192c565b9050610c20610c06606083016040840161196a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c835750610c83610c39604083016020840161196a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c9a5750610c9a610c39602083018361196a565b8015610d1f5750610d1f610cb160a083018361198c565b610cc091600491600091611d76565b610cc991611da0565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d55576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d5f8f826110ba565b50600101610bc4565b505060005b610d786001856118c3565b811015610e34576000888883818110610d9357610d936118fd565b9050602002810190610da5919061192c565b610db690608081019060600161196a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e2b57858281518110610dfd57610dfd6118fd565b6020026020010151610e0e826109ab565b610e1891906118c3565b92508215610e2b57610e2b8188856108c1565b50600101610d6d565b505050610f15565b8760005b81811015610f1257368b8b83818110610e5b57610e5b6118fd565b9050602002810190610e6d919061192c565b9050610e82610c06606083016040840161196a565b80610e9b5750610e9b610c39604083016020840161196a565b8015610eb25750610eb2610c39602083018361196a565b8015610ec95750610ec9610cb160a083018361198c565b610eff576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f098d826110ba565b50600101610e40565b50505b50505050505050505050565b6108e68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611337565b73ffffffffffffffffffffffffffffffffffffffff8216610f9a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098573ffffffffffffffffffffffffffffffffffffffff831682611466565b73ffffffffffffffffffffffffffffffffffffffff8216611007576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108e673ffffffffffffffffffffffffffffffffffffffff84168383611482565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661107757637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6110d26110ca602083018361196a565b6017903b1190565b611108576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611148576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061115d610c06606085016040860161196a565b61116857600061116e565b82608001355b9050600061118a611185608086016060870161196a565b6109ab565b9050816000036111c1576111c16111a7606086016040870161196a565b6111b7604087016020880161196a565b8660800135610f21565b6000806111d1602087018761196a565b73ffffffffffffffffffffffffffffffffffffffff16846111f560a089018961198c565b604051611203929190611de8565b60006040518083038185875af1925050503d8060008114611240576040519150601f19603f3d011682016040523d82523d6000602084013e611245565b606091505b50915091508161125857611258816114d1565b600061126d6111856080890160608a0161196a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861129e60208a018a61196a565b6112ae60608b0160408c0161196a565b6112be60808c0160608d0161196a565b8b608001358987116112d057866112da565b6112da8a886118c3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114605773ffffffffffffffffffffffffffffffffffffffff83166113a0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611415573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114399190611df8565b10156114605761146073ffffffffffffffffffffffffffffffffffffffff851684836114db565b50505050565b60003860003884865af16109855763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166114c7576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166114c75760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166114c757633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156115b8576115b8611565565b60405290565b600082601f8301126115cf57600080fd5b813567ffffffffffffffff808211156115ea576115ea611565565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561163057611630611565565b8160405283815286602085880101111561164957600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461168d57600080fd5b919050565b8035801515811461168d57600080fd5b600061014082840312156116b557600080fd5b6116bd611594565b905081358152602082013567ffffffffffffffff808211156116de57600080fd5b6116ea858386016115be565b6020840152604084013591508082111561170357600080fd5b50611710848285016115be565b60408301525061172260608301611669565b606082015261173360808301611669565b608082015261174460a08301611669565b60a082015260c082013560c082015260e082013560e082015261010061176b818401611692565b9082015261012061177d838201611692565b9082015292915050565b6000610100828403121561179a57600080fd5b50919050565b600080600080606085870312156117b657600080fd5b843567ffffffffffffffff808211156117ce57600080fd5b6117da888389016116a2565b955060208701359150808211156117f057600080fd5b818701915087601f83011261180457600080fd5b81358181111561181357600080fd5b8860208260051b850101111561182857600080fd5b60208301955080945050604087013591508082111561184657600080fd5b5061185387828801611787565b91505092959194509250565b6000806040838503121561187257600080fd5b823567ffffffffffffffff8082111561188a57600080fd5b611896868387016116a2565b935060208501359150808211156118ac57600080fd5b506118b985828601611787565b9150509250929050565b818103818111156109f0577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261196057600080fd5b9190910192915050565b60006020828403121561197c57600080fd5b61198582611669565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126119c157600080fd5b83018035915067ffffffffffffffff8211156119dc57600080fd5b6020019150368190038213156119f157600080fd5b9250929050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a2d57600080fd5b83018035915067ffffffffffffffff821115611a4857600080fd5b6020019150600581901b36038213156119f157600080fd5b6000815180845260005b81811015611a8657602081850181015186830182015201611a6a565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600081518084526020808501945080840160005b83811015611b0a57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611ad8565b509495945050505050565b6020815260008251610120806020850152611b34610140850183611a60565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe080868503016040870152611b708483611a60565b93506040870151915080868503016060870152611b8d8483611ac4565b935060608701519150611bb8608087018373ffffffffffffffffffffffffffffffffffffffff169052565b608087015173ffffffffffffffffffffffffffffffffffffffff811660a0880152915060a087015160c087015260c08701519150611bfa60e087018315159052565b60e08701519150610100611c258188018473ffffffffffffffffffffffffffffffffffffffff169052565b870151868503909101838701529050611c3e8382611a60565b9695505050505050565b602081528151602082015260006020830151610140806040850152611c71610160850183611a60565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611cac8382611a60565b9250506060850151611cd6608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611d498187018315159052565b90950151151593019290925250919050565b600060208284031215611d6d57600080fd5b61198582611692565b60008085851115611d8657600080fd5b83861115611d9357600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611de05780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611e0a57600080fd5b505191905056fea2646970667358221220e3a96cd078fc977fce981b97d63b4000e052a31f91c67bdd009891c891a8831e64736f6c63430008110033";
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
