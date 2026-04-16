import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GardenFacet, GardenFacetInterface } from "../GardenFacet";
type GardenFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GardenFacet__factory extends ContractFactory {
    constructor(...args: GardenFacetConstructorParams);
    deploy(_htlcRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GardenFacet>;
    getDeployTransaction(_htlcRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GardenFacet;
    connect(signer: Signer): GardenFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b5060405161204d38038061204d833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611fa96100a45f395f6106be0152611fa95ff3fe608060405260043610610028575f3560e01c80635f9af35d1461002c57806376ad76fe14610041575b5f5ffd5b61003f61003a366004611aec565b610054565b005b61003f61004f366004611b38565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611be5565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f846102698585611be5565b610a19565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103043447611be5565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b33610a4e565b60c08b01526104788a88610555565b504791505081811115610494576104945f846102698585611be5565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff8316333084610b90565b5f610578836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f6105886020840184611c1d565b73ffffffffffffffffffffffffffffffffffffffff1614806105ac57506040820135155b806105b957506060820135155b156105f0576040517f639a6b5600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106016040840160208501611c1d565b73ffffffffffffffffffffffffffffffffffffffff160361064e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8161065e578360800151610674565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b6040517f6ff78d6900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192505f917f00000000000000000000000000000000000000000000000000000000000000001690636ff78d6990602401602060405180830381865afa158015610703573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107279190611c3f565b905073ffffffffffffffffffffffffffffffffffffffff8116610776576040517f981a2a2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8083156108635760c086015173ffffffffffffffffffffffffffffffffffffffff8216906313d4a787906107b06040890160208a01611c1d565b6107bd60208a018a611c1d565b60c08b0151604080517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff9485166004820152939092166024840152908a0135604483015260648201526060890135608482015260a4015f604051808303818588803b158015610847575f5ffd5b505af1158015610859573d5f5f3e3d5ffd5b5050505050610950565b6108768660800151838860c00151610be8565b73ffffffffffffffffffffffffffffffffffffffff81166313d4a7876108a26040880160208901611c1d565b6108af6020890189611c1d565b60c08a0151604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015290890135604483015260648201526060880135608482015260a4015f604051808303815f87803b158015610939575f5ffd5b505af115801561094b573d5f5f3e3d5ffd5b505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168660a0015173ffffffffffffffffffffffffffffffffffffffff16036109da5760e08601518651604051608088013581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610a099190611ca6565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a4357610a3e8282610c14565b505050565b610a3e838383610c81565b5f82808203610a89576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610a97600185611be5565b818110610aa657610aa6611db9565b9050602002810190610ab89190611de6565b610ac9906080810190606001611c1d565b90505f610ad582610dcc565b905073ffffffffffffffffffffffffffffffffffffffff8216610aff57610afc3482611be5565b90505b5f610b0a8888610e16565b9050610b168888610f20565b610b238a89898985610f8c565b5f82610b2e85610dcc565b610b389190611be5565b905089811015610b82576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610bdb57637939f4245f526004601cfd5b5f60605260405250505050565b610a3e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6111d4565b73ffffffffffffffffffffffffffffffffffffffff8216610c61576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff8316826112fb565b73ffffffffffffffffffffffffffffffffffffffff8216610cce576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015610d0a575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610dab576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610d81573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610da59190611e22565b50505050565b610a3e73ffffffffffffffffffffffffffffffffffffffff84168383611314565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e0e57610e0973ffffffffffffffffffffffffffffffffffffffff83163061135d565b610e10565b475b92915050565b6060815f8167ffffffffffffffff811115610e3357610e336118a2565b604051908082528060200260200182016040528015610e5c578160200160208202803683370190505b5090505f5f5b83811015610f1557868682818110610e7c57610e7c611db9565b9050602002810190610e8e9190611de6565b610e9f906080810190606001611c1d565b9150610eaa82610dcc565b838281518110610ebc57610ebc611db9565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f0d5734838281518110610ef557610ef5611db9565b60200260200101818151610f099190611be5565b9052505b600101610e62565b509095945050505050565b5f5b81811015610a3e5736838383818110610f3d57610f3d611db9565b9050602002810190610f4f9190611de6565b9050610f6160e0820160c08301611e3d565b15610f8357610f83610f796060830160408401611c1d565b82608001356104a1565b50600101610f22565b83838383825f80805b838110156111b857368c8c83818110610fb057610fb0611db9565b9050602002810190610fc29190611de6565b9050610fd16020820182611c1d565b9350610fe36040820160208301611c1d565b925061108684610ff660a0840184611e58565b611004916004915f91611ec0565b61100d91611ee7565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061116e57506110ba6110a06060830160408401611c1d565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156110f357508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561116e575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156111a5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111af8e82611390565b50600101610f95565b505050506111c9848484845f611603565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610da55773ffffffffffffffffffffffffffffffffffffffff831661123d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156112b0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112d49190611f4d565b1015610da557610da573ffffffffffffffffffffffffffffffffffffffff8516848361181a565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611354576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113a86113a06020830183611c1d565b6017903b1190565b6113de576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361141d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114316110a06060850160408601611c1d565b61143b575f611441565b82608001355b90505f61145c6114576080860160608701611c1d565b610dcc565b9050815f03611492576114926114786060860160408701611c1d565b6114886040870160208801611c1d565b8660800135610be8565b5f806114a16020870187611c1d565b73ffffffffffffffffffffffffffffffffffffffff16846114c560a0890189611e58565b6040516114d3929190611f64565b5f6040518083038185875af1925050503d805f811461150d576040519150601f19603f3d011682016040523d82523d5f602084013e611512565b606091505b5091509150816115255761152581611898565b5f6115396114576080890160608a01611c1d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861156a60208a018a611c1d565b61157a60608b0160408c01611c1d565b61158a60808c0160608d01611c1d565b8b6080013589871161159c57866115a6565b6115a68a88611be5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611612600182611be5565b81811061162157611621611db9565b90506020028101906116339190611de6565b611644906080810190606001611c1d565b90505f5f5f5f5f5f5f5b8881101561180a5761166160018a611be5565b81108015611670575088600114155b1561174b578d8d8281811061168757611687611db9565b90506020028101906116999190611de6565b6116aa906080810190606001611c1d565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461174b578a81815181106116f1576116f1611db9565b602002602001015161170287610dcc565b61170c9190611be5565b965073ffffffffffffffffffffffffffffffffffffffff861615611730575f611732565b895b93508387111561174b5761174b868d610269878b611be5565b8d8d8281811061175d5761175d611db9565b905060200281019061176f9190611de6565b611780906060810190604001611c1d565b945061178b85610dcc565b925073ffffffffffffffffffffffffffffffffffffffff8516156117af575f6117b1565b895b915081831180156117ee57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561180257611802858d6102698587611be5565b60010161164e565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611354575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661135457633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156118f3576118f36118a2565b60405290565b5f82601f830112611908575f5ffd5b813567ffffffffffffffff811115611922576119226118a2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561196f5761196f6118a2565b604052818152838201602001851015611986575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146119c3575f5ffd5b50565b80356119d1816119a2565b919050565b80151581146119c3575f5ffd5b80356119d1816119d6565b5f61014082840312156119ff575f5ffd5b611a076118cf565b823581529050602082013567ffffffffffffffff811115611a26575f5ffd5b611a32848285016118f9565b602083015250604082013567ffffffffffffffff811115611a51575f5ffd5b611a5d848285016118f9565b604083015250611a6f606083016119c6565b6060820152611a80608083016119c6565b6080820152611a9160a083016119c6565b60a082015260c0828101359082015260e08083013590820152611ab761010083016119e3565b610100820152611aca61012083016119e3565b61012082015292915050565b5f60a08284031215611ae6575f5ffd5b50919050565b5f5f60c08385031215611afd575f5ffd5b823567ffffffffffffffff811115611b13575f5ffd5b611b1f858286016119ee565b925050611b2f8460208501611ad6565b90509250929050565b5f5f5f5f60e08587031215611b4b575f5ffd5b843567ffffffffffffffff811115611b61575f5ffd5b611b6d878288016119ee565b945050602085013567ffffffffffffffff811115611b89575f5ffd5b8501601f81018713611b99575f5ffd5b803567ffffffffffffffff811115611baf575f5ffd5b8760208260051b8401011115611bc3575f5ffd5b60209190910193509150611bda8660408701611ad6565b905092959194509250565b81810381811115610e10577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611c2d575f5ffd5b8135611c38816119a2565b9392505050565b5f60208284031215611c4f575f5ffd5b8151611c38816119a2565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611ccd610160840182611c5a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611d088282611c5a565b9150506060840151611d32608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611da161012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e18575f5ffd5b9190910192915050565b5f60208284031215611e32575f5ffd5b8151611c38816119d6565b5f60208284031215611e4d575f5ffd5b8135611c38816119d6565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e8b575f5ffd5b83018035915067ffffffffffffffff821115611ea5575f5ffd5b602001915036819003821315611eb9575f5ffd5b9250929050565b5f5f85851115611ece575f5ffd5b83861115611eda575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f46577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611f5d575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220eaf4db8dda7df3b29353b669418f092cf29926843e37c492a6c2e7fc130066ec64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_htlcRegistry";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGarden";
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
            readonly name: "_gardenData";
            readonly type: "tuple";
            readonly internalType: "struct GardenFacet.GardenData";
            readonly components: readonly [{
                readonly name: "redeemer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "timelock";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "secretHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEvmReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGarden";
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
            readonly name: "_gardenData";
            readonly type: "tuple";
            readonly internalType: "struct GardenFacet.GardenData";
            readonly components: readonly [{
                readonly name: "redeemer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "timelock";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "secretHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEvmReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
        readonly name: "AssetNotSupported";
        readonly inputs: readonly [];
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidGardenData";
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
    static createInterface(): GardenFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GardenFacet;
}
export {};
