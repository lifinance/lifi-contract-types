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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001f9c38038062001f9c833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611ed2620000ca60003960006105f7015260006106220152611ed26000f3fe6080604052600436106100295760003560e01c80636e0671611461002e578063b70fb9a514610043575b600080fd5b61004161003c3660046117eb565b610056565b005b6100416100513660046118aa565b610249565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761193d565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020b89600001518a60c001518a8a3361046d565b60c08a015261021a89876105b4565b504790508181111561023b5761023b600084610236858561193d565b6108c1565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d5344761193d565b9050846102fa8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610331576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361036f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103ac576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103ea576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a88608001518960c001516108f6565b61044488886105b4565b50479150508181111561046157610461600084610236858561193d565b50506000909155505050565b6000828082036104a9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104b860018561193d565b8181106104c7576104c7611950565b90506020028101906104d9919061197f565b6104ea9060808101906060016119bd565b905060006104f7826109ab565b905073ffffffffffffffffffffffffffffffffffffffff82166105215761051e348261193d565b90505b600061052d88886109f6565b90506105398888610b0a565b6105468a89898985610b77565b600082610552856109ab565b61055c919061193d565b9050898110156105a6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60006105d8836080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050600081156105ed575060c0830151610620565b61062084608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610d46565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087806000019061067991906119df565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020908101906106c2908901896119df565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060200161070960a0890189611a4b565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506020016107506080890160608a016119bd565b73ffffffffffffffffffffffffffffffffffffffff16815260200161077b60a0890160808a016119bd565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107bb91906119bd565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107e360e08901896119df565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526108529190600401611b68565b6000604051808303818588803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108b39190611c9b565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83166108eb576108e68282610d72565b505050565b6108e6838383610ddf565b80600003610930576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109895780341015610985576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61098573ffffffffffffffffffffffffffffffffffffffff8316333084610e4d565b600073ffffffffffffffffffffffffffffffffffffffff8216156109ee576109e973ffffffffffffffffffffffffffffffffffffffff831630610eaa565b6109f0565b475b92915050565b60608160008167ffffffffffffffff811115610a1457610a146115b0565b604051908082528060200260200182016040528015610a3d578160200160208202803683370190505b5090506000805b83811015610aff57868682818110610a5e57610a5e611950565b9050602002810190610a70919061197f565b610a819060808101906060016119bd565b9150610a8c826109ab565b838281518110610a9e57610a9e611950565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610aef5734838281518110610ad757610ad7611950565b60200260200101818151610aeb919061193d565b9052505b610af881611dae565b9050610a44565b509095945050505050565b60005b818110156108e65736838383818110610b2857610b28611950565b9050602002810190610b3a919061197f565b9050610b4c60e0820160c08301611de6565b15610b6e57610b6e610b6460608301604084016119bd565b82608001356108f6565b50600101610b0d565b838383838260005b81811015610d2b57368a8a83818110610b9a57610b9a611950565b9050602002810190610bac919061197f565b9050610bdb610bc160608301604084016119bd565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c3e5750610c3e610bf460408301602084016119bd565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c555750610c55610bf460208301836119bd565b8015610cda5750610cda610c6c60a08301836119df565b610c7b91600491600091611e01565b610c8491611e2b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d10576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d1a8c82610edf565b50610d2481611dae565b9050610b7f565b5050610d3b84848484600061115c565b505050505050505050565b6108e68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611382565b73ffffffffffffffffffffffffffffffffffffffff8216610dbf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098573ffffffffffffffffffffffffffffffffffffffff8316826114b1565b73ffffffffffffffffffffffffffffffffffffffff8216610e2c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108e673ffffffffffffffffffffffffffffffffffffffff841683836114cd565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610e9c57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b610ef7610eef60208301836119bd565b6017903b1190565b610f2d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610f6d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610f82610bc160608501604086016119bd565b610f8d576000610f93565b82608001355b90506000610faf610faa60808601606087016119bd565b6109ab565b905081600003610fe657610fe6610fcc60608601604087016119bd565b610fdc60408701602088016119bd565b8660800135610d46565b600080610ff660208701876119bd565b73ffffffffffffffffffffffffffffffffffffffff168461101a60a08901896119df565b604051611028929190611e73565b60006040518083038185875af1925050503d8060008114611065576040519150601f19603f3d011682016040523d82523d6000602084013e61106a565b606091505b50915091508161107d5761107d8161151c565b6000611092610faa6080890160608a016119bd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886110c360208a018a6119bd565b6110d360608b0160408c016119bd565b6110e360808c0160608d016119bd565b8b608001358987116110f557866110ff565b6110ff8a8861193d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b836000868261116c60018261193d565b81811061117b5761117b611950565b905060200281019061118d919061197f565b61119e9060808101906060016119bd565b905060008060008060008060005b88811015611372576111bf60018a61193d565b811080156111ce575088600114155b156112aa578d8d828181106111e5576111e5611950565b90506020028101906111f7919061197f565b6112089060808101906060016119bd565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146112aa578a818151811061124f5761124f611950565b6020026020010151611260876109ab565b61126a919061193d565b965073ffffffffffffffffffffffffffffffffffffffff86161561128f576000611291565b895b9350838711156112aa576112aa868d610236878b61193d565b8d8d828181106112bc576112bc611950565b90506020028101906112ce919061197f565b6112df9060608101906040016119bd565b94506112ea856109ab565b925073ffffffffffffffffffffffffffffffffffffffff85161561130f576000611311565b895b9150818311801561134e57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561136257611362858d610236858761193d565b61136b81611dae565b90506111ac565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114ab5773ffffffffffffffffffffffffffffffffffffffff83166113eb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114849190611e83565b10156114ab576114ab73ffffffffffffffffffffffffffffffffffffffff85168483611526565b50505050565b60003860003884865af16109855763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611512576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166115125760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661151257633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611603576116036115b0565b60405290565b600082601f83011261161a57600080fd5b813567ffffffffffffffff80821115611635576116356115b0565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561167b5761167b6115b0565b8160405283815286602085880101111561169457600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116d857600080fd5b919050565b803580151581146116d857600080fd5b6000610140828403121561170057600080fd5b6117086115df565b905081358152602082013567ffffffffffffffff8082111561172957600080fd5b61173585838601611609565b6020840152604084013591508082111561174e57600080fd5b5061175b84828501611609565b60408301525061176d606083016116b4565b606082015261177e608083016116b4565b608082015261178f60a083016116b4565b60a082015260c082013560c082015260e082013560e08201526101006117b68184016116dd565b908201526101206117c88382016116dd565b9082015292915050565b600061010082840312156117e557600080fd5b50919050565b6000806000806060858703121561180157600080fd5b843567ffffffffffffffff8082111561181957600080fd5b611825888389016116ed565b9550602087013591508082111561183b57600080fd5b818701915087601f83011261184f57600080fd5b81358181111561185e57600080fd5b8860208260051b850101111561187357600080fd5b60208301955080945050604087013591508082111561189157600080fd5b5061189e878288016117d2565b91505092959194509250565b600080604083850312156118bd57600080fd5b823567ffffffffffffffff808211156118d557600080fd5b6118e1868387016116ed565b935060208501359150808211156118f757600080fd5b50611904858286016117d2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156109f0576109f061190e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126119b357600080fd5b9190910192915050565b6000602082840312156119cf57600080fd5b6119d8826116b4565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a1457600080fd5b83018035915067ffffffffffffffff821115611a2f57600080fd5b602001915036819003821315611a4457600080fd5b9250929050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a8057600080fd5b83018035915067ffffffffffffffff821115611a9b57600080fd5b6020019150600581901b3603821315611a4457600080fd5b6000815180845260005b81811015611ad957602081850181015186830182015201611abd565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600081518084526020808501945080840160005b83811015611b5d57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611b2b565b509495945050505050565b6020815260008251610120806020850152611b87610140850183611ab3565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe080868503016040870152611bc38483611ab3565b93506040870151915080868503016060870152611be08483611b17565b935060608701519150611c0b608087018373ffffffffffffffffffffffffffffffffffffffff169052565b608087015173ffffffffffffffffffffffffffffffffffffffff811660a0880152915060a087015160c087015260c08701519150611c4d60e087018315159052565b60e08701519150610100611c788188018473ffffffffffffffffffffffffffffffffffffffff169052565b870151868503909101838701529050611c918382611ab3565b9695505050505050565b602081528151602082015260006020830151610140806040850152611cc4610160850183611ab3565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611cff8382611ab3565b9250506060850151611d29608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611d9c8187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ddf57611ddf61190e565b5060010190565b600060208284031215611df857600080fd5b6119d8826116dd565b60008085851115611e1157600080fd5b83861115611e1e57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611e6b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611e9557600080fd5b505191905056fea264697066735822122069d56ab37862695a74b82ac92e6c9001c410486ed9b8a15c5441d9de360b438364736f6c63430008110033";
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
