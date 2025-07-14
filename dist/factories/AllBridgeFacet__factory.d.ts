import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611eca380380611eca83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611e116100b95f395f818161072c0152818161076c015261084a0152611e115ff3fe608060405260043610610028575f3560e01c80634d126a951461002c578063b1a247bd14610041575b5f5ffd5b61003f61003a3660046118ec565b610054565b005b61003f61004f36600461199a565b610281565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476119e7565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102448a5f01518b60c001518b8b336104a1565b60c08b01526102538a886105e3565b504791505081811115610274576102745f8461026f85856119e7565b61095f565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030c34476119e7565b9050846103318160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610368576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610420576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047088608001518960c00151610994565b61047a88886105e3565b504791505081811115610496576104965f8461026f85856119e7565b50505f909155505050565b5f828082036104dc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ea6001856119e7565b8181106104f9576104f9611a1f565b905060200281019061050b9190611a4c565b61051c906080810190606001611a88565b90505f61052882610a48565b905073ffffffffffffffffffffffffffffffffffffffff82166105525761054f34826119e7565b90505b5f61055d8888610a92565b90506105698888610b9c565b6105768a89898985610c08565b5f8261058185610a48565b61058b91906119e7565b9050898110156105d5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b6105f08260e00151610fb3565b81604001351461062c576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036106b45780356106af576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610722565b805f01355f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614610722576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075582608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516110a0565b61076560e0820160c08301611aa8565b15610848577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff165f1b8460c00151845f01358560400135866060013587608001358860a00160208101906107ee9190611ac1565b89602001356040518963ffffffff1660e01b8152600401610816989796959493929190611b18565b5f604051808303815f87803b15801561082d575f5ffd5b505af115801561083f573d5f5f3e3d5ffd5b50505050610924565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8260200135846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c00151855f01358660400135876060013588608001358960a00160208101906108d19190611ac1565b5f6040518a63ffffffff1660e01b81526004016108f5989796959493929190611b18565b5f604051808303818588803b15801561090c575f5ffd5b505af115801561091e573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109539190611bad565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166109895761098482826110cc565b505050565b610984838383611139565b805f036109cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a265780341015610a22576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a2273ffffffffffffffffffffffffffffffffffffffff83163330846111a7565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a8a57610a8573ffffffffffffffffffffffffffffffffffffffff8316306111ff565b610a8c565b475b92915050565b6060815f8167ffffffffffffffff811115610aaf57610aaf6116bc565b604051908082528060200260200182016040528015610ad8578160200160208202803683370190505b5090505f805b83811015610b9157868682818110610af857610af8611a1f565b9050602002810190610b0a9190611a4c565b610b1b906080810190606001611a88565b9150610b2682610a48565b838281518110610b3857610b38611a1f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b895734838281518110610b7157610b71611a1f565b60200260200101818151610b8591906119e7565b9052505b600101610ade565b509095945050505050565b5f5b818110156109845736838383818110610bb957610bb9611a1f565b9050602002810190610bcb9190611a4c565b9050610bdd60e0820160c08301611aa8565b15610bff57610bff610bf56060830160408401611a88565b8260800135610994565b50600101610b9e565b838383838260018114610ecf575f8585610c236001856119e7565b818110610c3257610c32611a1f565b9050602002810190610c449190611a4c565b610c55906080810190606001611a88565b90505f89815b81811015610dfc57368d8d83818110610c7657610c76611a1f565b9050602002810190610c889190611a4c565b9050610cb7610c9d6060830160408401611a88565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d195750610d19610cd06040830160208401611a88565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d305750610d30610cd06020830183611a88565b8015610db35750610db3610d4760a0830183611cc0565b610d55916004915f91611d28565b610d5e91611d4f565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610de9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df38f82611232565b50600101610c5b565b505f90505b610e0c6001856119e7565b811015610ec7575f888883818110610e2657610e26611a1f565b9050602002810190610e389190611a4c565b610e49906080810190606001611a88565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ebe57858281518110610e9057610e90611a1f565b6020026020010151610ea182610a48565b610eab91906119e7565b92508215610ebe57610ebe81888561095f565b50600101610e01565b505050610fa7565b875f5b81811015610fa457368b8b83818110610eed57610eed611a1f565b9050602002810190610eff9190611a4c565b9050610f14610c9d6060830160408401611a88565b80610f2d5750610f2d610cd06040830160208401611a88565b8015610f445750610f44610cd06020830183611a88565b8015610f5b5750610f5b610d4760a0830183611cc0565b610f91576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9b8d82611232565b50600101610ed2565b50505b50505050505050505050565b5f6001821480610fc35750600a82145b15610fcc575090565b60388203610fdc57506002919050565b81610fe957506003919050565b660416edef1601be8203610fff57506004919050565b6089820361100f57506005919050565b61a4b1820361102057506006919050565b61a86a820361103157506008919050565b612105820361104257506009919050565b61a4ec82036110535750600b919050565b6620ef041111600082036110695750600d919050565b6040517f22df402100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6109848383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6114a5565b73ffffffffffffffffffffffffffffffffffffffff8216611119576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a2273ffffffffffffffffffffffffffffffffffffffff8316826115d2565b73ffffffffffffffffffffffffffffffffffffffff8216611186576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098473ffffffffffffffffffffffffffffffffffffffff841683836115eb565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166111f257637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61124a6112426020830183611a88565b6017903b1190565b611280576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112bf576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112d3610c9d6060850160408601611a88565b6112dd575f6112e3565b82608001355b90505f6112fe6112f96080860160608701611a88565b610a48565b9050815f036113345761133461131a6060860160408701611a88565b61132a6040870160208801611a88565b86608001356110a0565b5f806113436020870187611a88565b73ffffffffffffffffffffffffffffffffffffffff168461136760a0890189611cc0565b604051611375929190611db5565b5f6040518083038185875af1925050503d805f81146113af576040519150601f19603f3d011682016040523d82523d5f602084013e6113b4565b606091505b5091509150816113c7576113c781611634565b5f6113db6112f96080890160608a01611a88565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861140c60208a018a611a88565b61141c60608b0160408c01611a88565b61142c60808c0160608d01611a88565b8b6080013589871161143e5786611448565b6114488a886119e7565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115cc5773ffffffffffffffffffffffffffffffffffffffff831661150e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611581573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115a59190611dc4565b10156115cc576115cc73ffffffffffffffffffffffffffffffffffffffff8516848361163e565b50505050565b5f385f3884865af1610a225763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661162b576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661162b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661162b57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561170d5761170d6116bc565b60405290565b5f82601f830112611722575f5ffd5b813567ffffffffffffffff81111561173c5761173c6116bc565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611789576117896116bc565b6040528181528382016020018510156117a0575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461109b575f5ffd5b8035801515811461109b575f5ffd5b5f61014082840312156117ff575f5ffd5b6118076116e9565b823581529050602082013567ffffffffffffffff811115611826575f5ffd5b61183284828501611713565b602083015250604082013567ffffffffffffffff811115611851575f5ffd5b61185d84828501611713565b60408301525061186f606083016117bc565b6060820152611880608083016117bc565b608082015261189160a083016117bc565b60a082015260c0828101359082015260e080830135908201526118b761010083016117df565b6101008201526118ca61012083016117df565b61012082015292915050565b5f60e082840312156118e6575f5ffd5b50919050565b5f5f5f5f6101208587031215611900575f5ffd5b843567ffffffffffffffff811115611916575f5ffd5b611922878288016117ee565b945050602085013567ffffffffffffffff81111561193e575f5ffd5b8501601f8101871361194e575f5ffd5b803567ffffffffffffffff811115611964575f5ffd5b8760208260051b8401011115611978575f5ffd5b6020919091019350915061198f86604087016118d6565b905092959194509250565b5f5f61010083850312156119ac575f5ffd5b823567ffffffffffffffff8111156119c2575f5ffd5b6119ce858286016117ee565b9250506119de84602085016118d6565b90509250929050565b81810381811115610a8c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611a7e575f5ffd5b9190910192915050565b5f60208284031215611a98575f5ffd5b611aa1826117bc565b9392505050565b5f60208284031215611ab8575f5ffd5b611aa1826117df565b5f60208284031215611ad1575f5ffd5b813560048110611aa1575f5ffd5b60048110611b14577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a0830152611b4e60c0830185611adf565b8260e08301529998505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611bd4610160840182611b61565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611c0f8282611b61565b9150506060840151611c39608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611ca861012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cf3575f5ffd5b83018035915067ffffffffffffffff821115611d0d575f5ffd5b602001915036819003821315611d21575f5ffd5b9250929050565b5f5f85851115611d36575f5ffd5b83861115611d42575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611dae577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611dd4575f5ffd5b505191905056fea2646970667358221220314ec7dd2ed69fa979864cb4a0ddecbbbc170879ce6f4cdb35333f5840709c1864736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidNonEVMReceiver";
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
        readonly name: "UnsupportedAllBridgeChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
