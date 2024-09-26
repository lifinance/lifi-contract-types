import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027b6380380620027b6833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161271c6200009a6000396000818160b101526107e4015261271c6000f3fe60806040526004361061003f5760003560e01c80633c36bac11461004457806346fd98e214610059578063b78e6e401461008c578063ba956b9a1461009f575b600080fd5b610057610052366004612142565b6100f8565b005b34801561006557600080fd5b506100796100743660046121ee565b61032a565b6040519081526020015b60405180910390f35b61005761009a3660046122a7565b6103e7565b3480156100ab57600080fd5b506100d37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610083565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610173576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101843447612325565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610201576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102248160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561025b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610299576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102d6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102eb8a600001518b60c001518b8b3361064b565b60c08b01526102fa8a8861078e565b50479150508181111561031c5761031c6000846103178585612325565b61087d565b505060009091555050505050565b600060208251111561039d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f546f6f206d616e7920636861696e20494473000000000000000000000000000060448201526064015b60405180910390fd5b60005b82518110156103e1578281815181106103bb576103bb612338565b602002602001015160ff16600883901b17915080806103d990612367565b9150506103a0565b50919050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610462576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104733447612325565b9050846104988160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104cf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361050d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361054a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610588576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015173ffffffffffffffffffffffffffffffffffffffff1615610618576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610622888861078e565b50479150508181111561063f5761063f6000846103178585612325565b50506000909155505050565b600082808203610687576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610696600185612325565b8181106106a5576106a5612338565b90506020028101906106b7919061239f565b6106c89060808101906060016123dd565b905060006106d5826108b3565b905073ffffffffffffffffffffffffffffffffffffffff82166106ff576106fc3482612325565b90505b600061070b888861096c565b90506107178888610a78565b6107248a89898985610ae5565b600082610730856108b3565b61073a9190612325565b905089811015610780576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610394565b9a9950505050505050505050565b60c082015160a08301516040517f6e553f650000000000000000000000000000000000000000000000000000000081528335600482015273ffffffffffffffffffffffffffffffffffffffff91821660248201527f000000000000000000000000000000000000000000000000000000000000000090911691636e553f65916044016000604051808303818588803b15801561082957600080fd5b505af115801561083d573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610871919061246d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a9576108a4838383610e97565b505050565b6108a48282611019565b600073ffffffffffffffffffffffffffffffffffffffff821615610964576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561093b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095f9190612580565b610966565b475b92915050565b60608160008167ffffffffffffffff81111561098a5761098a611ed0565b6040519080825280602002602001820160405280156109b3578160200160208202803683370190505b5090506000805b83811015610a6d578686828181106109d4576109d4612338565b90506020028101906109e6919061239f565b6109f79060808101906060016123dd565b9150610a02826108b3565b838281518110610a1457610a14612338565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a655734838281518110610a4d57610a4d612338565b60200260200101818151610a619190612325565b9052505b6001016109ba565b509095945050505050565b60005b818110156108a45736838383818110610a9657610a96612338565b9050602002810190610aa8919061239f565b9050610aba60e0820160c08301612599565b15610adc57610adc610ad260608301604084016123dd565b8260800135611143565b50600101610a7b565b838383838260018114610db25760008585610b01600185612325565b818110610b1057610b10612338565b9050602002810190610b22919061239f565b610b339060808101906060016123dd565b9050600089815b81811015610cde57368d8d83818110610b5557610b55612338565b9050602002810190610b67919061239f565b9050610b96610b7c60608301604084016123dd565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610bf95750610bf9610baf60408301602084016123dd565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c105750610c10610baf60208301836123dd565b8015610c955750610c95610c2760a08301836125b6565b610c3691600491600091612622565b610c3f9161264c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ccb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd58f826112b9565b50600101610b3a565b505060005b610cee600185612325565b811015610daa576000888883818110610d0957610d09612338565b9050602002810190610d1b919061239f565b610d2c9060808101906060016123dd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610da157858281518110610d7357610d73612338565b6020026020010151610d84826108b3565b610d8e9190612325565b92508215610da157610da181888561087d565b50600101610ce3565b505050610e8b565b8760005b81811015610e8857368b8b83818110610dd157610dd1612338565b9050602002810190610de3919061239f565b9050610df8610b7c60608301604084016123dd565b80610e115750610e11610baf60408301602084016123dd565b8015610e285750610e28610baf60208301836123dd565b8015610e3f5750610e3f610c2760a08301836125b6565b610e75576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e7f8d826112b9565b50600101610db6565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ee4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f31576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc29190612580565b905080821115611008576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610394565b611013848484611597565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611066576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110a9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610394565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611103576040519150601f19603f3d011682016040523d82523d6000602084013e611108565b606091505b50509050806108a4576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000361117d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111d657803410156111d2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611243573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112679190612580565b9050818110156112ad576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610394565b6108a48333308561166b565b6112cf6112c960208301836123dd565b3b151590565b611305576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611345576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061135a610b7c60608501604086016123dd565b61136557600061136b565b82608001355b9050600061138761138260608601604087016123dd565b6108b3565b9050600061139e61138260808701606088016123dd565b9050826000036113d5576113d56113bb60608701604088016123dd565b6113cb60408801602089016123dd565b8760800135611885565b8460800135821015611420576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610394565b60008061143060208801886123dd565b73ffffffffffffffffffffffffffffffffffffffff168561145460a08a018a6125b6565b604051611462929190612694565b60006040518083038185875af1925050503d806000811461149f576040519150601f19603f3d011682016040523d82523d6000602084013e6114a4565b606091505b5091509150816114b7576114b7816119c8565b60006114cc61138260808a0160608b016123dd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114fd60208b018b6123dd565b61150d60608c0160408d016123dd565b61151d60808d0160608e016123dd565b8c6080013589871161152f5786611539565b6115398a88612325565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108a49084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119d2565b73ffffffffffffffffffffffffffffffffffffffff84166116b8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611705576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611776573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179a9190612580565b90506117a882868686611ae1565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611818573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183c9190612580565b6118469190612325565b1461187d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118a557505050565b73ffffffffffffffffffffffffffffffffffffffff82166118f2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611967573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198b9190612580565b10156108a45761199d83836000611b3f565b6108a483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b3f565b8051602082018181fd5b6000611a34826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cc19092919063ffffffff16565b9050805160001480611a55575080806020019051810190611a5591906126a4565b6108a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610394565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110139085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115e9565b801580611bdf57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611bb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdd9190612580565b155b611c6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610394565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108a49084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e9565b6060611cd08484600085611cd8565b949350505050565b606082471015611d6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610394565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d9391906126c1565b60006040518083038185875af1925050503d8060008114611dd0576040519150601f19603f3d011682016040523d82523d6000602084013e611dd5565b606091505b5091509150611de687838387611df1565b979650505050505050565b60608315611e87578251600003611e805773ffffffffffffffffffffffffffffffffffffffff85163b611e80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610394565b5081611cd0565b611cd08383815115611e9c5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039491906126d3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f2357611f23611ed0565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f7057611f70611ed0565b604052919050565b600082601f830112611f8957600080fd5b813567ffffffffffffffff811115611fa357611fa3611ed0565b611fd460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611f29565b818152846020838601011115611fe957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461202a57600080fd5b919050565b801515811461203d57600080fd5b50565b803561202a8161202f565b6000610140828403121561205e57600080fd5b612066611eff565b905081358152602082013567ffffffffffffffff8082111561208757600080fd5b61209385838601611f78565b602084015260408401359150808211156120ac57600080fd5b506120b984828501611f78565b6040830152506120cb60608301612006565b60608201526120dc60808301612006565b60808201526120ed60a08301612006565b60a082015260c082013560c082015260e082013560e0820152610100612114818401612040565b90820152610120612126838201612040565b9082015292915050565b6000602082840312156103e157600080fd5b6000806000806060858703121561215857600080fd5b843567ffffffffffffffff8082111561217057600080fd5b61217c8883890161204b565b9550602087013591508082111561219257600080fd5b818701915087601f8301126121a657600080fd5b8135818111156121b557600080fd5b8860208260051b85010111156121ca57600080fd5b6020830195508094505050506121e38660408701612130565b905092959194509250565b6000602080838503121561220157600080fd5b823567ffffffffffffffff8082111561221957600080fd5b818501915085601f83011261222d57600080fd5b81358181111561223f5761223f611ed0565b8060051b9150612250848301611f29565b818152918301840191848101908884111561226a57600080fd5b938501935b8385101561229b578435925060ff8316831461228b5760008081fd5b828252938501939085019061226f565b98975050505050505050565b600080604083850312156122ba57600080fd5b823567ffffffffffffffff8111156122d157600080fd5b6122dd8582860161204b565b9250506122ed8460208501612130565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610966576109666122f6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612398576123986122f6565b5060010190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123d357600080fd5b9190910192915050565b6000602082840312156123ef57600080fd5b6123f882612006565b9392505050565b60005b8381101561241a578181015183820152602001612402565b50506000910152565b6000815180845261243b8160208601602086016123ff565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612496610160850183612423565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124d18382612423565b92505060608501516124fb608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061256e8187018315159052565b90950151151593019290925250919050565b60006020828403121561259257600080fd5b5051919050565b6000602082840312156125ab57600080fd5b81356123f88161202f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125eb57600080fd5b83018035915067ffffffffffffffff82111561260657600080fd5b60200191503681900382131561261b57600080fd5b9250929050565b6000808585111561263257600080fd5b8386111561263f57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561268c5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126b657600080fd5b81516123f88161202f565b600082516123d38184602087016123ff565b6020815260006123f8602083018461242356fea2646970667358221220e4b2bd0d6145c23dac00cec7a422ac3b719b3d6a1411bfb2f5d9edbd5f3bc99964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlySwapsFromERC20ToNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
